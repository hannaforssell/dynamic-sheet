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

  const valueStr = value > 0 ? `+${value}` : value;
  const typeStr = type ? `[${type}, ${currEffect.name}]` : `[Untyped, ${currEffect.name}]`;

  attribute.calculationData += ` ${valueStr}${typeStr}`;
}

export class EffectService {
  constructor() {}

  public Apply = (
    characterSheet: ISheetData
  ) => {
    characterSheet.abilityData.forEach(a => a.calculationData = "");

    var orderedEffects = characterSheet.effects
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
