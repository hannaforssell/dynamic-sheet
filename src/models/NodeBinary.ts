import { Node } from "./Node";

// NodeBinary for binary operations such as Add, Subtract etc...
export class NodeBinary extends Node {
  // Constructor accepts the two nodes to be operated on and function
  // that performs the actual operation
  constructor(public lhs: Node, public rhs: Node, public op: (arg0: number | null, arg1: number | null) => number | null) {
    super();
  }

  public override Eval = (): number | null => {
    // Evaluate both sides
    const lhsVal = this.lhs.Eval();
    const rhsVal = this.rhs.Eval();

    // Evaluate and return
    return this.op(lhsVal, rhsVal);
  };
}
