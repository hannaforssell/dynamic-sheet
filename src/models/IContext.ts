export interface IContext {
    ResolveVariable: (name: string) => number;
    CallFunction: (name: string, args: number[]) => number;
}