import { EffectType } from "./EffectType";

export class Effect {
    constructor(
        public name: string,
        public order: number,
        public type: EffectType,
        public exec: string
    ) {}
}