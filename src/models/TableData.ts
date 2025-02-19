export class TableData {
    constructor(
        public name: string,
        public group: string,
        public headers: string[],
        public data: string[][]
    ) {}
}