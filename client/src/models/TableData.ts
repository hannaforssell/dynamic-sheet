export class TableData {
    sortOrder: number;

    constructor(
        public name: string,
        public group: string,
        public headers: string[],
        public data: string[][],
        sortOrder?: number,
    ) {
        this.sortOrder = sortOrder ?? 100;
    }
}