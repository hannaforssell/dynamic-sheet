import { AbilityData } from "./characterSheet/AbilityData";
import { QualityData } from "./characterSheet/QualityData";

export interface IModFunctions {
    editMode: boolean;
    addAbility(ability: AbilityData): void;
    removeAbility(ability: AbilityData): void;
    replaceAbility(oldAbility: AbilityData, newAbility: AbilityData): void;
    addAbility(ability: AbilityData): void;
    removeQuality(quality: QualityData): void;
    replaceQuality(oldQuality: QualityData, newQuality: QualityData): void;
    addQuality(quality: QualityData): void;
    recalc(): void;
}
