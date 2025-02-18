import { AbilityData } from "./AbilityData";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { TableData } from "./TableData";

export interface ISheetData {
    qualityData: Map<string, QualityData>;
    abilityData: Map<string, AbilityData>;
    classSkills: Set<string>;
    itemData: Map<string, ItemData>;
    tableData: Map<string, TableData>;
  }