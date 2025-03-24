import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { AbilityService } from "./abilityService";
import { EffectService } from "./effectService";
import { QualityService } from "./qualityService";
import { SpecialAbilityService } from "./specialAbilityService";

export class CalculatorService {
    private abilityService = new AbilityService();
    private qualityService = new QualityService();
    private effectService = new EffectService();
    private specialAbilityService = new SpecialAbilityService();

    constructor() {}

    public calculate = (characterSheet: ICharacterSheet): ICharacterSheet => {
        this.effectService.apply(characterSheet);

        const returnSheet = {
            ...characterSheet,
            abilityData: this.abilityService.calculate(characterSheet.abilityData),
            qualityData: this.qualityService.calculate(characterSheet.qualityData)
        };

        return returnSheet;
    };
}
