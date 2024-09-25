import { AbilityData } from "./AbilityData";

interface IListItem {
    name: string;
    desc: string;
}

export class ItemData {
    constructor(
        public name: string,
        public value: AbilityData,
        public location: string,
        public weight: number,
        public listItems?: IListItem[]
    ) {}
}