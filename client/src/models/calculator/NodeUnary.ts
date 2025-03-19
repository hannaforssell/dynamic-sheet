import { Node } from "./Node";

// NodeUnary for unary operations such as Negate
export class NodeUnary extends Node {
  // Constructor accepts the two nodes to be operated on and function
  // that performs the actual operation
  constructor(
    public rhs: Node,
    public op: (arg0: number | null) => number | null
  ) {
    super();
  }

  public override Eval = (): number | null => {
    // Evaluate RHS
    const rhsVal = this.rhs.Eval();

    // Evaluate and return
    return this.op(rhsVal);
  };
}
