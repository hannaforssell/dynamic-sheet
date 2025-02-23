import { AbilityDataMod } from "./AbilityDataMod";

export class AbilityData {
    sortOrder: number;
    abilityMods: AbilityDataMod[];
    
    constructor(
        public name: string,
        public group: string,
        public sum: number | null,
        public calculationData: string,
        sortOrder?: number,
        abilityMods?: AbilityDataMod[]
    ) {
        this.sortOrder = sortOrder ?? 100;
        this.abilityMods = abilityMods ?? [];
    }
}