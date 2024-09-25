import { AbilityData } from "./AbilityData";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";

export interface ISheetData {
    qualityData: Map<string, QualityData>;
    abilityData: Map<string, AbilityData>;
    classSkills: Set<string>;
    itemData: Map<string, ItemData>;
  }