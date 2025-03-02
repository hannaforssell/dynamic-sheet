import { QualityDataMod } from "./QualityDataMod";

export class QualityData {
    sortOrder: number;
    qualityMods: QualityDataMod[];
    calculatedText: string;

    constructor(
        public name: string,
        public group: string,
        public originalText: string,
        sortOrder?: number,
        qualityMods?: QualityDataMod[]
    ) {
        this.calculatedText = "";
        this.sortOrder = sortOrder ?? 100;
        this.qualityMods = qualityMods ?? [];
    }
}
