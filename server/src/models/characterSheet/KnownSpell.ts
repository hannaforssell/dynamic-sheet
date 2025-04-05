import { Effect } from "./Effect";
import { AbilityData } from "./AbilityData";
import { SpellSchool } from "./SpellSchool";
import { ISpell } from "./ISpell";

export class KnownSpell implements ISpell {
    textModifiers: Map<string, AbilityData>;

    constructor(
        public name: string,
        public infoUrl: string,
        public school: SpellSchool,
        public level: number,
        public castingTime: string,
        public components: string,
        public range: string,
        public target: string,
        public duration: string,
        public savingThrow: string,
        public spellResistance: string,
        public originalText: string,
        public effects: Effect[]
    ) {
        this.textModifiers = new Map<string, AbilityData>();
    }
}
