export class AbilityData {
    sortOrder: number;
    
    constructor(
        public name: string,
        public group: string,
        public sum: number | null,
        public calculationData: string,
        sortOrder?: number
    ) {
        this.sortOrder = sortOrder ?? 100;
    }

    
}