import { AbilityData } from "../models/AbilityData";
import { Parser } from "./parser";
import { AbilityReference } from "../models/AbilityReference";

export class CalculatorService {
  constructor() {}

  public Calculate = (
    sheetData: Map<string, AbilityData>
  ): Map<string, AbilityData> => {
    const calculated: Map<string, AbilityData> = new Map();
    let currentBatch: AbilityData[] = Array.from(
      sheetData,
      ([_, value]) => value
    );
    let nextBatch: AbilityData[] = [];
    const maxDepth = 100;
    let currentDepth = 0;

    do {
      currentBatch.map((abilityData) => {
        let newAbility: AbilityData;
        try {
          let modifiedInput = abilityData.calculationData;
          const references = this.getReferences(modifiedInput);

          if (references.some((r) => !calculated.has(r.refName))) {
            nextBatch.push(abilityData);            
          } else {
            modifiedInput = this.replaceReferences(
              modifiedInput,
              references,
              calculated
            );
            const displayInput = modifiedInput;           

            modifiedInput = this.handleSetOperation(modifiedInput);
            modifiedInput = this.removeReferences(modifiedInput);
            modifiedInput = this.removeBrackets(modifiedInput);

            let result: number | null = 0;
            if (modifiedInput.length > 0) {
              const parser = new Parser(modifiedInput);
              const node = parser.ParseExpression();
              result = node.Eval();
            }

            newAbility = new AbilityData(
              abilityData.name,
              abilityData.group,
              result,
              displayInput,
              abilityData.sortOrder
            );
            calculated.set(newAbility.name, newAbility);
          }
        } catch (error) {
          console.log("error: ", error);

          newAbility = new AbilityData(
            abilityData.name,
            abilityData.group,
            0,
            abilityData.calculationData,
            abilityData.sortOrder
          );
          calculated.set(newAbility.name, newAbility);
        }
      });

      currentBatch = nextBatch;
      nextBatch = [];
      currentDepth++;

      if (currentDepth > maxDepth) {
        throw new Error("Max Depth reached" + nextBatch);
      }
    } while (currentBatch.length > 0);

    return calculated;
  };

  private removeBrackets = (calculationData: string) => {
    const regexp = /\[(.*?)\]/g;
    return calculationData.replaceAll(regexp, "");
  };

  private getReferences = (calculationData: string): AbilityReference[] => {
    const regexp = /\d+(#|@)\w+/g;

    const references = calculationData.match(regexp);
    if (!references) {
      return [];
    }

    return references.map((ref) => {
      return new AbilityReference(ref, ref.split(/(#|@)/)[2]);
    });
  };

  private removeReferences = (calculatedData: string) => {
    return calculatedData.replaceAll(/(#|@)\w+/g, "");
  };

  private escapeRegExp = (stringToGoIntoTheRegex: string) => {
    return stringToGoIntoTheRegex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  };

  private replaceReferences = (
    calculatedData: string,
    references: AbilityReference[],
    calculated: Map<string, AbilityData>
  ) => {
    references.forEach((ref) => {
      const referenceAbility = calculated.get(ref.refName);
      if (!referenceAbility) {
        return;
      }
      const newValue =
        referenceAbility.sum !== null ? referenceAbility.sum.toString() : "—";      
      calculatedData = calculatedData.replaceAll(
        new RegExp(`(\\d+)(?=\\#${ref.refName})`, "g"),
        newValue
      );
      calculatedData = calculatedData.replaceAll(
        new RegExp(`(\\d+)(?=\\@${ref.refName})`, "g"),
        this.getAbilityMod(newValue)
      );
    });
    return calculatedData;
  };

  private getAbilityMod = (ability: string) => {
    if (ability === "—") {
      return "0";
    }
    return Math.floor(Number(ability) / 2 - 5).toString();
  };

  private handleSetOperation = (input: string) => {
    const setIndex = input.lastIndexOf("SET");

    if (setIndex !== -1) {
      input = input.substring(setIndex + 3);
    }
    return input;
  };
}
