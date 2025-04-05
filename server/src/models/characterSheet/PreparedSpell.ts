import { Effect } from "./Effect";
import { SpellSchool } from "./SpellSchool";
import { KnownSpell } from "./KnownSpell";

export class PreparedSpell extends KnownSpell {
    constructor(
        name: string,
        infoUrl: string,
        school: SpellSchool,
        level: number,
        castingTime: string,
        components: string,
        range: string,
        target: string,
        duration: string,
        savingThrow: string,
        spellResistance: string,
        originalText: string,
        effects: Effect[],
        public cast: boolean,
        public alwaysCast: boolean,
        public active: boolean
    ) {
        super(name, infoUrl, school, level, castingTime, components, range, target, duration, savingThrow, spellResistance, originalText, effects);
    }
}
