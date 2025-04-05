import { Token } from "../models/calculator/Token";
import { Tokenizer } from "../services/tokenizer";

test("can tokenize simple number", () => {
    //arrange
    const input = "537";
    const tokenizer = new Tokenizer(input);

    //act
    tokenizer.NextToken();

    //assert
    expect(tokenizer.getCurrentToken()).toBe(Token.Number);
    expect(tokenizer.num).toBe(537);
});

test("can tokenize simple number", () => {
    //arrange
    const input = "537+3";
    const tokenizer = new Tokenizer(input);

    //act
    tokenizer.NextToken();

    //assert
    expect(tokenizer.getCurrentToken()).toBe(Token.Number);
    expect(tokenizer.num).toBe(537);

    tokenizer.NextToken();

    //assert
    expect(tokenizer.getCurrentToken()).toBe(Token.Add);

    tokenizer.NextToken();

    //assert
    expect(tokenizer.getCurrentToken()).toBe(Token.Number);
    expect(tokenizer.num).toBe(3);
});

test("can tokenize MAX function", () => {
    //arrange
    const input = "MAX(5, 3)";
    const tokenizer = new Tokenizer(input);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.MaxFunction);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.OpenParens);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.Number);
    expect(tokenizer.num).toBe(5);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.Comma);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.Number);
    expect(tokenizer.num).toBe(3);

    tokenizer.NextToken();
    expect(tokenizer.getCurrentToken()).toBe(Token.CloseParens);
});
