import { ISheetData } from "../models/ISheetData";

function AddAbilityMod(characterSheet: ISheetData, attributeName: string, value: number, type: string) {
  if(characterSheet == null) {
    return;
  }

  const attribute = characterSheet.abilityData.get(attributeName);
  if(!attribute) {
    return;
  }

  const valueStr = value > 0 ? `+${value}` : value;

  if(type) {
    attribute.calculationData += ` ${valueStr}[${type}]`;
  } else {
    attribute.calculationData += ` ${valueStr}`;
  }
}

export class EffectService {
  constructor() {}

  public Apply = (
    cs: ISheetData
  ) => {
    cs.abilityData.forEach(a => a.calculationData = "");

    var orderedEffects = cs.effects.sort((a, b) => a.order - b.order)

    orderedEffects.forEach(effect => {
      eval(effect.exec)
    });
    
    return cs;
  }
}
