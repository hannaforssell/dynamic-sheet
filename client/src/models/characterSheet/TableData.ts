import { DataGroupType } from "./DataGroupType";

export class TableData {
    sortOrder: number;

    constructor(
        public name: string,
        public group: DataGroupType,
        public headers: string[],
        public data: string[][],
        sortOrder?: number
    ) {
        this.sortOrder = sortOrder ?? 100;
    }
}
