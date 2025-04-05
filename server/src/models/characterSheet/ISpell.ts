import { Effect } from "./Effect";
import { AbilityData } from "./AbilityData";
import { SpellSchool } from "./SpellSchool";

export interface ISpell {
    name: string;
    infoUrl: string;
    school: SpellSchool;
    level: number;
    castingTime: string;
    components: string;
    range: string;
    target: string;
    duration: string;
    savingThrow: string;
    spellResistance: string;
    originalText: string;
    effects: Effect[];
    textModifiers: Map<string, AbilityData>;
}
