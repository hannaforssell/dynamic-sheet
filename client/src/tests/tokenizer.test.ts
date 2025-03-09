import { Token } from "../models/Token";
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
