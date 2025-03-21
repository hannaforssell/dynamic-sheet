import { AbilityData } from "./characterSheet/AbilityData";
import { QualityData } from "./characterSheet/QualityData";

export interface IModFunctions {
    editMode: boolean;
    removeAbility(quality: AbilityData): void;
    removeQuality(quality: QualityData): void;
}
