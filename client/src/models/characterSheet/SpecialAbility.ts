import { SpecialAbilitySource } from "./SpecialAbilitySource";
import { ActionType } from "./ActionType";
import { SpecialAbilityType } from "./SpecialAbilityType";
import { Effect } from "./Effect";
import { AbilityData } from "./AbilityData";

export class SpecialAbility {
    textModifiers: Map<string, AbilityData>;

    constructor(
        public name: string,
        public source: SpecialAbilitySource,
        public sourceText: string,
        public type: SpecialAbilityType,
        public levelAquired: number | null,
        public active: boolean,
        public activationCost: ActionType | null,
        public originalText: string,
        public effects: Effect[]
    ) {
        this.textModifiers = new Map<string, AbilityData>();
    }
}
