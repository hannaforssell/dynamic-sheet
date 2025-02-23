import { AbilityDataMod } from "../models/AbilityDataMod";
import { Effect } from "../models/Effect";
import { ISheetData } from "../models/ISheetData";

let currEffect: Effect | null = null;
let currSheet: ISheetData | null = null;

export function AddAbilityMod(attributeName: string, value: number, type: string) {
  if(!currSheet || !currEffect) {
    console.log("Error adding ability mod.")
    return;
  }

  const attribute = currSheet.abilityData.get(attributeName);
  if(!attribute) {
    return;
  }

  // const valueStr = value > 0 ? `+${value}` : value;
  // const typeStr = type ? `[${type}, ${currEffect.name}]` : `[Untyped, ${currEffect.name}]`;

  // attribute.calculationData += ` ${valueStr}${typeStr}`;

  var newMod = new AbilityDataMod(type ?? "Untyped", currEffect.name, "+", value);
  if(newMod.operator == "+") {
    attribute.abilityMods.forEach(m => {
      if(m.type == newMod.type && m.operator == "+") {
        let toDisable = (m.value ?? 0) > (newMod.value ?? 0) ? newMod : m;
        toDisable.enabled = false;
      }
    });
  }

  attribute.abilityMods.push(new AbilityDataMod(type ?? "Untyped", currEffect.name, "+", value));
}

export function SETAbility(attributeName: string, value: number) {
  if(!currSheet || !currEffect) {
    console.log("Error adding ability mod.")
    return;
  }

  const attribute = currSheet.abilityData.get(attributeName);
  if(!attribute) {
    return;
  }

  attribute.calculationData += ` SET${value}[${currEffect.name}]`;
}

export class EffectService {
  constructor() {}

  public Apply = (
    characterSheet: ISheetData
  ) => {
    characterSheet.abilityData.forEach(a => { a.calculationData = ""; a.abilityMods = [] });

    const orderedEffects = characterSheet.effects
      .filter(e => e.enabled)
      .sort((a, b) => a.order - b.order)

    currSheet = characterSheet;

    orderedEffects.forEach(effect => {
      currEffect = effect;
      eval(effect.exec)
    });
    
    return characterSheet;
  }
}
