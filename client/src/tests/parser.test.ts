import { Parser } from "../services/parser";

test("can parse a simple number", () => {
    //arrange
    const input = "537";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();

    //assert
    expect(node.Eval()).toBe(537);
});

test("can parse a simple addition", () => {
    //arrange
    const input = "537+3";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();

    //assert
    expect(node.Eval()).toBe(540);
});

test("can parse complex expression", () => {
    //arrange
    const input = "537+3*(7/2)--11";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();

    //assert
    expect(node.Eval()).toBe(558.5);
});

test("can parse decimal points", () => {
    //arrange
    const input = "15.90";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();

    //assert
    expect(node.Eval()).toBe(15.9);
});

test("can parse MAX function", () => {
    //arrange
    const input = "MAX(5, 3)";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();
    const evaluation = node.Eval();

    //assert
    expect(evaluation).toBe(5);
});

test("can parse MAX function inside MAX function", () => {
    //arrange
    const input = "MAX(MAX(5, 3), 10)";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();
    const evaluation = node.Eval();

    //assert
    expect(evaluation).toBe(10);
});

test("can parse functions with trailing calculations", () => {
    //arrange
    const input = "MAX(5, 3)+5*10";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();
    const evaluation = node.Eval();

    //assert
    expect(evaluation).toBe(55);
});

test("can parse complex functions with leading calculations", () => {
    //arrange
    const input = "5*10+MAX(MAX(5, 3), 10)";
    const parser = new Parser(input);

    //act
    const node = parser.ParseExpression();
    const evaluation = node.Eval();

    //assert
    expect(evaluation).toBe(60);
});
