import { Node } from "./Node";

// NodeNumber represents a literal number in the expression
export class NodeNumber extends Node {
  constructor(public value: number | null) {
    super();
  }

  public override Eval = (): number | null => {
    return this.value;
  };
}
