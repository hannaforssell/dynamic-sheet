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
