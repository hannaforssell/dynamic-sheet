import { ICharacterSheet } from "../models/characterSheet/ICharacterSheet";
import { AbilityService } from "./abilityService";
import { EffectService } from "./effectService";
import { QualityService } from "./qualityService";

export class CalculatorService {
    private abilityService = new AbilityService();
    private qualityService = new QualityService();
    private effectService = new EffectService();

    constructor() {}

    public calculate = (characterSheet: ICharacterSheet): ICharacterSheet => {
        this.effectService.apply(characterSheet);

        this.abilityService.calculate(characterSheet);
        const returnSheet = {
            ...characterSheet,
            qualityData: this.qualityService.calculate(characterSheet.qualityData)
        };

        return returnSheet;
    };
}
