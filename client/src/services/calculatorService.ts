import { AbilityData } from "../models/characterSheet/AbilityData";
import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { AbilityService } from "./abilityService";
import { EffectService } from "./effectService";
import { QualityService } from "./qualityService";

export class CalculatorService {
  private abilityService = new AbilityService();
  private qualityService = new QualityService();
  private effectService = new EffectService();

  constructor() { }

  public calculate = (characterSheet: ICharacterSheet): ICharacterSheet => {
    this.effectService.Apply(characterSheet);

    return {
      ...characterSheet,
      abilityData: this.abilityService.calculate(characterSheet.abilityData),
      qualityData: this.qualityService.calculate(characterSheet.qualityData),
    };
  }
}


