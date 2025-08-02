import { ItemLocation } from "./ItemLocation";

export class Item {
    public getName = () => this.name ?? this.subItems[0]?.name;
    public weight = () => this.subItems.reduce((acc, curr) => Math.max(acc, curr.weight), 0);
    public marketPrice = () => this.subItems.reduce((acc, curr) => acc + curr.marketPrice, 0);
    public craftCostGp = () => this.subItems.reduce((acc, curr) => acc + curr.craftCostGp, 0);
    public craftCostXp = () => this.subItems.reduce((acc, curr) => acc + curr.craftCostXp, 0);
    public craftCostTime = () => this.subItems.reduce((acc, curr) => acc + curr.craftCostTime, 0);

    constructor(
        public location: ItemLocation,
        public subItems: SubItem[],
        public name?: string
    ) {}
}

export class SubItem {
    constructor(
        public name: string,
        public weight: number,
        public marketPrice: number,
        public craftCostGp: number,
        public craftCostXp: number,
        public craftCostTime: number
    ) {}
}
