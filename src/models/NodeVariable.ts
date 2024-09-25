import { Node } from "./Node";

// Represents a variable (or a constant) in an expression.  eg: "2 * pi"
export class NodeVariable extends Node {
  constructor(public variableName: string) {
    super();
  }

  public override Eval = (): number => {
    // return ctx.ResolveVariable(this.variableName);;
    return 0;
  };
}
