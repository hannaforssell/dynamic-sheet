import { SpecialAbilitySource } from "./SpecialAbilitySource";
import { ActionType } from "./ActionType";
import { SpecialAbilityType } from "./SpecialAbilityType";
import { Effect } from "./Effect";

export class SpecialAbility {
    calculatedText: string;

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
        this.calculatedText = "";
    }
}
