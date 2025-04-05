import { ModificationSource } from "./ModificationSource";
import { ActionType } from "./ActionType";
import { ModificationType } from "./ModificationType";
import { Effect } from "./Effect";
import { AbilityData } from "./AbilityData";

export class Modification {
    textModifiers: Map<string, AbilityData>;

    constructor(
        public name: string,
        public source: ModificationSource,
        public sourceText: string,
        public type: ModificationType,
        public levelAquired: number | null,
        public active: boolean,
        public activationCost: ActionType | null,
        public originalText: string,
        public effects: Effect[]
    ) {
        this.textModifiers = new Map<string, AbilityData>();
    }
}
