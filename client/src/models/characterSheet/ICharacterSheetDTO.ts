import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { SpecialAbility } from "./SpecialAbility";
import { TableData } from "./TableData";

export interface ICharacterSheetDTO {
    _id: string | null;
    qualityData: [string, QualityData][];
    abilityData: [string, AbilityData][];
    classSkills: string[];
    itemData: [string, ItemData][];
    tableData: [string, TableData][];
    specialAbilities: SpecialAbility[];
    effects: Effect[];
    imageLink: string;
}
