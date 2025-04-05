import { EffectType } from "./EffectType";

export class Effect {
    constructor(
        public name: string,
        public enabled: boolean,
        public order: number,
        public type: EffectType,
        public exec: string
    ) {}
}
