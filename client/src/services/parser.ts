import { Node } from "../models/calculator/Node";
import { NodeBinary } from "../models/calculator/NodeBinary";
import { NodeNumber } from "../models/calculator/NodeNumber";
import { NodeUnary } from "../models/calculator/NodeUnary";
import { Token } from "../models/calculator/Token";
import { Tokenizer } from "./tokenizer";

export class Parser {
    private tokenizer: Tokenizer;

    constructor(input: string) {
        this.tokenizer = new Tokenizer(input);
    }

    // Parse an entire expression and check EOF was reached
    public ParseExpression = (): Node => {
        this.tokenizer.NextToken();

        // For the moment, all we understand is add and subtract
        const expr = this.ParseAddSubtract();

        if (this.tokenizer.getCurrentToken() !== Token.EOF) {
            throw new Error("Unexpected characters at end of expression. Got: " + Token[this.tokenizer.getCurrentToken()]);
        }

        return expr;
    };

    // Parse an sequence of add/subtract operators
    private ParseFunction = (): Node => {
        let arg1: Node | null = null;

        while (true) {
            let op: ((arg0: number | null, arg1: number | null) => number | null) | null = null;

            if (this.tokenizer.getCurrentToken() === Token.MaxFunction) {
                op = (a, b) => (a === null || b === null ? null : Math.max(a, b));
            }

            // Binary operator found?
            if (op === null) {
                return arg1 ?? this.ParseAddSubtract();
            }

            this.tokenizer.NextToken();
            if (this.tokenizer.getCurrentToken() !== Token.OpenParens) {
                throw new Error("Function call must be followed by arguments inside parenthesis.");
            }

            this.tokenizer.NextToken();
            arg1 = this.ParseFunction();

            this.tokenizer.NextToken();
            const arg2 = this.ParseFunction();

            if (this.tokenizer.getCurrentToken() !== Token.CloseParens) {
                throw new Error("Function call must be followed by arguments inside parenthesis.");
            }
            this.tokenizer.NextToken();

            arg1 = new NodeBinary(arg1, arg2, op);
        }
    };

    // Parse an sequence of add/subtract operators
    private ParseAddSubtract = (): Node => {
        let lhs = this.ParseMultiplyDivide();

        while (true) {
            let op: ((arg0: number | null, arg1: number | null) => number | null) | null = null;

            if (this.tokenizer.getCurrentToken() === Token.Add) {
                op = (a, b) => (a === null || b === null ? null : a + b);
            } else if (this.tokenizer.getCurrentToken() === Token.Subtract) {
                op = (a, b) => (a === null || b === null ? null : a - b);
            }

            // Binary operator found?
            if (op === null) {
                return lhs; // no
            }

            this.tokenizer.NextToken();

            // Parse the right hand side of the expression
            const rhs = this.ParseMultiplyDivide();

            // Create a binary node and use it as the left-hand side from now on
            lhs = new NodeBinary(lhs, rhs, op);
        }
    };

    // Parse an sequence of add/subtract operators
    private ParseMultiplyDivide = (): Node => {
        let lhs = this.ParseUnary();

        while (true) {
            let op: ((arg0: number | null, arg1: number | null) => number | null) | null = null;

            if (this.tokenizer.getCurrentToken() === Token.Multiply) {
                op = (a, b) => (a === null || b === null ? null : a * b);
            } else if (this.tokenizer.getCurrentToken() === Token.Divide) {
                op = (a, b) => (a === null || b === null ? null : a / b);
            }

            // Binary operator found?
            if (op === null) {
                return lhs; // no
            }

            this.tokenizer.NextToken();

            // Parse the right hand side of the expression
            const rhs = this.ParseUnary();

            // Create a binary node and use it as the left-hand side from now on
            lhs = new NodeBinary(lhs, rhs, op);
        }
    };

    // Parse a unary operator (eg: negative/positive)
    private ParseUnary = (): Node => {
        while (true) {
            // Positive operator is a no-op so just skip it
            if (this.tokenizer.getCurrentToken() === Token.Add) {
                this.tokenizer.NextToken();
            }

            if (this.tokenizer.getCurrentToken() === Token.Subtract) {
                this.tokenizer.NextToken();

                // Parse RHS
                // Note this recurses to self to support negative of a negative
                const rhs = this.ParseUnary();

                // Create unary node
                return new NodeUnary(rhs, (a) => {
                    if (a === null) {
                        return null;
                    }
                    return -a;
                });
            }

            // No positive/negative operator so parse a leaf node
            return this.ParseLeaf();
        }
    };

    // Parse a leaf node
    // (For the moment this is just a number)
    private ParseLeaf = (): Node => {
        if (this.tokenizer.getCurrentToken() === Token.Number) {
            const node = new NodeNumber(this.tokenizer.num);
            this.tokenizer.NextToken();
            return node;
        }

        if (this.tokenizer.getCurrentToken() === Token.NaN) {
            const node = new NodeNumber(null);
            this.tokenizer.NextToken();
            return node;
        }

        if (this.tokenizer.getCurrentToken() === Token.OpenParens) {
            this.tokenizer.NextToken();
            const node = this.ParseAddSubtract();

            if (this.tokenizer.getCurrentToken() !== Token.CloseParens) {
                throw new Error("Missing close parenthesis");
            }

            this.tokenizer.NextToken();

            return node;
        }

        if (this.tokenizer.getCurrentToken() === Token.MaxFunction) {
            return this.ParseFunction();
        }

        // Don't Understand
        throw new Error(`Unexpect token: ${this.tokenizer.getCurrentToken()}, currChar: ${this.tokenizer.currentChar}`);
    };
}

// fix so it doesnt error when last char is non numerical
