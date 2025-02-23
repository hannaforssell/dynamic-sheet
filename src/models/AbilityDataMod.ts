export class AbilityDataMod {   
    enabled: boolean;

    constructor(
        public type: string,
        public source: string,
        public operator: string,
        public value: number | null
    ) {
        this.enabled = true;
    }

    public toString() {
        return `${this.operator}${this.value}[${this.type}, ${this.source}]`;
    }
}