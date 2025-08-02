import { AbilityData } from "./AbilityData";
import { Effect } from "./Effect";
import { Item } from "./Item";
import { QualityData } from "./QualityData";
import { Modification } from "./Modification";
import { TableData } from "./TableData";
import { KnownSpell } from "./KnownSpell";
import { PreparedSpell } from "./PreparedSpell";
import { PermanentSpell } from "./PermanentSpell";

export interface ICharacterSheet {
    _id: string | null;
    qualityData: Map<string, QualityData>;
    abilityData: Map<string, AbilityData>;
    classSkills: Set<string>;
    itemData: Item[];
    tableData: Map<string, TableData>;
    specialAbilities: Modification[];
    feats: Modification[];
    spellsKnown: KnownSpell[];
    spellsPrepared: PreparedSpell[];
    permanentSpells: PermanentSpell[];
    effects: Effect[];
    imageLink: string;
}
