import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { ItemData } from "./ItemData";
import { QualityData } from "./QualityData";
import { SpecialAbility } from "./SpecialAbility";
import { TableData } from "./TableData";

export interface ICharacterSheet {
    _id: string | null;
    qualityData: Map<string, QualityData>;
    abilityData: Map<string, AbilityData>;
    classSkills: Set<string>;
    itemData: Map<string, ItemData>;
    tableData: Map<string, TableData>;
    specialAbilities: SpecialAbility[];
    effects: Effect[];
    imageLink: string;
}
