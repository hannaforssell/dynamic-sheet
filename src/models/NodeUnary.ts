import { Node } from "./Node";

// NodeUnary for unary operations such as Negate
export class NodeUnary extends Node {
  // Constructor accepts the two nodes to be operated on and function
  // that performs the actual operation
  constructor(public rhs: Node, public op: (arg0: number) => number) {
    super();
  }

  public override Eval = (): number => {
    // Evaluate RHS
    var rhsVal = this.rhs.Eval();

    // Evaluate and return
    var result = this.op(rhsVal);
    return result;
  };
}
