import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { Modification } from "./Modification";
import { TableData } from "./TableData";

export interface ICharacterSheetDTO {
    _id: string | null;
    qualityData: [string, QualityData][];
    abilityData: [string, AbilityData][];
    classSkills: string[];
    itemData: [string, ItemData][];
    tableData: [string, TableData][];
    modifications: Modification[];
    effects: Effect[];
    imageLink: string;
}
