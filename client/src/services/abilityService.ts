import { AbilityData } from "../models/characterSheet/AbilityData";
import { Parser } from "./parser";
import { AbilityReference } from "../models/calculator/AbilityReference";
import { AbilityDataMod } from "../models/characterSheet/AbilityDataMod";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { DataGroupType } from "../models/characterSheet/DataGroupType";

export class AbilityService {
    private bracketsToRemoveRegex = /\[(.*?)\]/g;
    private referenceRegex = /\d+(#|@)\w+/g;
    private removeReferenceRegex = /(#|@)\w+/g;
    private doubleBracketsRegex = /{{.+?}}/g;

    private calculated: Map<string, boolean> = new Map();

    private MAX_DEPTH = 100;

    constructor() {}

    public calculate = (characterSheet: ICharacterSheet) => {
        this.calculated.clear();

        this.calculateAbilities(characterSheet, characterSheet.abilityData);

        const modificationsBatch = this.getModificationsBatch(characterSheet);
        this.calculateAbilities(characterSheet, modificationsBatch);
        this.applyModifications(characterSheet, modificationsBatch);
    };

    public calculateAbilities = (characterSheet: ICharacterSheet, startBatch: Map<string, AbilityData>) => {
        let currentBatch = Array.from(startBatch, ([, value]) => value);
        let nextBatch: AbilityData[] = [];

        let currentDepth = 0;
        do {
            currentBatch.map((abilityData) => {
                try {
                    let modifiedInput = abilityData.abilityMods.reduce((acc, m) => {
                        if (!m.enabled) {
                            return acc;
                        }
                        if (m.operator === "*") {
                            return `(${acc})${m.toString()}`;
                        }
                        return acc + m.toString();
                    }, "");

                    const references = this.getReferences(modifiedInput);

                    if (references.some((r) => !this.calculated.has(r.refName))) {
                        nextBatch.push(abilityData);
                    } else {
                        modifiedInput = this.replaceReferences(modifiedInput, abilityData.abilityMods, references, characterSheet.abilityData);
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

                        abilityData.calculatedSum = result;
                        abilityData.calculatedText = displayInput;

                        this.calculated.set(abilityData.name, true);
                    }
                } catch (error) {
                    console.error(error);
                }
            });

            if (nextBatch.length != 0 && currentBatch.length == nextBatch.length) {
                console.error(`No change in batch size after ${currentDepth} iterations`);
                console.error(nextBatch);
                return;
            }

            currentBatch = nextBatch;
            nextBatch = [];
            currentDepth++;

            if (currentDepth > this.MAX_DEPTH) {
                throw new Error("Max Depth reached" + nextBatch);
            }
        } while (currentBatch.length > 0);
    };

    private getModificationsBatch = (characterSheet: ICharacterSheet) => {
        const retMap = new Map<string, AbilityData>();

        characterSheet.specialAbilities.forEach((modification) => {
            const bracketTexts = modification.originalText.match(this.doubleBracketsRegex);
            if (bracketTexts) {
                bracketTexts.forEach((bracketText) => {
                    const inner = bracketText.slice(2, bracketText.length - 2);
                    retMap.set(inner, new AbilityData(inner, DataGroupType.Misc, 0, undefined, [new AbilityDataMod(inner, "Untyped", "+", inner)]));
                });
            }
        });

        characterSheet.feats.forEach((modification) => {
            const bracketTexts = modification.originalText.match(this.doubleBracketsRegex);
            if (bracketTexts) {
                bracketTexts.forEach((bracketText) => {
                    const inner = bracketText.slice(2, bracketText.length - 2);
                    retMap.set(inner, new AbilityData(inner, DataGroupType.Misc, 0, undefined, [new AbilityDataMod(inner, "Untyped", "+", inner)]));
                });
            }
        });

        return retMap;
    };

    private applyModifications = (characterSheet: ICharacterSheet, modificationData: Map<string, AbilityData>) => {
        characterSheet.specialAbilities.forEach((modification) => {
            modification.textModifiers.clear();

            const bracketTexts = modification.originalText.match(this.doubleBracketsRegex);
            if (bracketTexts) {
                bracketTexts.forEach((bracketText) => {
                    const inner = bracketText.slice(2, bracketText.length - 2);
                    const ability = modificationData.get(inner);
                    if (ability) {
                        modification.textModifiers.set(bracketText, ability);
                    }
                });
            }
        });

        characterSheet.feats.forEach((modification) => {
            modification.textModifiers.clear();

            const bracketTexts = modification.originalText.match(this.doubleBracketsRegex);
            if (bracketTexts) {
                bracketTexts.forEach((bracketText) => {
                    const inner = bracketText.slice(2, bracketText.length - 2);
                    const ability = modificationData.get(inner);
                    if (ability) {
                        modification.textModifiers.set(bracketText, ability);
                    }
                });
            }
        });

        return characterSheet;
    };

    private removeBrackets = (calculationData: string) => {
        return calculationData.replaceAll(this.bracketsToRemoveRegex, "");
    };

    private getReferences = (calculationData: string): AbilityReference[] => {
        const references = calculationData.match(this.referenceRegex);
        if (!references) {
            return [];
        }

        return references.map((ref) => {
            return new AbilityReference(ref, ref.split(/(#|@)/)[2]);
        });
    };

    private removeReferences = (calculatedData: string) => {
        return calculatedData.replaceAll(this.removeReferenceRegex, "");
    };

    private replaceReferences = (calculatedData: string, mods: AbilityDataMod[], references: AbilityReference[], abilityData: Map<string, AbilityData>) => {
        references.forEach((ref) => {
            const referenceAbility = abilityData.get(ref.refName);
            if (!referenceAbility) {
                return;
            }
            const newValue = referenceAbility.calculatedSum !== null ? referenceAbility.calculatedSum.toString() : "—";

            calculatedData = calculatedData.replaceAll(new RegExp(`(\\d+)(?=\\#${ref.refName})`, "g"), newValue);
            calculatedData = calculatedData.replaceAll(new RegExp(`(\\d+)(?=\\@${ref.refName})`, "g"), this.getAbilityMod(newValue));

            mods.forEach((m) => {
                m.value = m.value.replaceAll(new RegExp(`(\\d+)(?=\\#${ref.refName})`, "g"), newValue);
                m.value = m.value.replaceAll(new RegExp(`(\\d+)(?=\\@${ref.refName})`, "g"), this.getAbilityMod(newValue));
            });
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
