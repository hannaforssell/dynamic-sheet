import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { Modification } from "./Modification";
import { TableData } from "./TableData";

export interface ICharacterSheet {
    _id: string | null;
    qualityData: Map<string, QualityData>;
    abilityData: Map<string, AbilityData>;
    classSkills: Set<string>;
    itemData: Map<string, ItemData>;
    tableData: Map<string, TableData>;
    specialAbilities: Modification[];
    feats: Modification[];
    effects: Effect[];
    imageLink: string;
}
