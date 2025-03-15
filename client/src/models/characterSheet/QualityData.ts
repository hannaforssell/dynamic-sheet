import { QualityDataMod } from "./QualityDataMod";

export class QualityData {
    sortOrder: number;
    displayName: string;
    qualityMods: QualityDataMod[];
    calculatedText: string;

    constructor(
        public name: string,
        public group: string,
        public originalText: string,
        sortOrder?: number,
        displayName?: string,
        qualityMods?: QualityDataMod[]
    ) {
        this.displayName = displayName ?? name;
        this.calculatedText = "";
        this.sortOrder = sortOrder ?? 100;
        this.qualityMods = qualityMods ?? [];
    }
}
