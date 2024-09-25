import { Token } from "../models/Token";

export class Tokenizer {
  private index: number = 0;
  public currentChar: string = "";
  private currentToken: Token = Token.EOF;
  public num: number = 0;
  private identifier: string = "";

  constructor(private input: string) {
    // this.NextChar();
    // this.NextToken();
  }

  public getCurrentToken = (): Token => {
    return this.currentToken;
  };

  // Read the next character from the input strem
  // and store it in _currentChar, or load '!' if EOF
  private NextChar = () => {
    if (this.index >= this.input.length) {
      this.currentChar = "!";
    } else {
      this.currentChar = this.input[this.index];
      this.index++;
    }
  };

  // Read the next token from the input stream
  public NextToken = () => {
    // Skip whitespace
    while (!/\S/.test(this.currentChar)) {
      this.NextChar();
    }

    // Special characters
    switch (this.currentChar) {
      case "!":
        this.currentToken = Token.EOF;
        return;

      case "+":
        this.NextChar();
        this.currentToken = Token.Add;
        return;

      case "-":
        this.NextChar();
        this.currentToken = Token.Subtract;
        return;

      case "*":
        this.NextChar();
        this.currentToken = Token.Multiply;
        return;

      case "/":
        this.NextChar();
        this.currentToken = Token.Divide;
        return;

      case "(":
        this.NextChar();
        this.currentToken = Token.OpenParens;
        return;

      case ")":
        this.NextChar();
        this.currentToken = Token.CloseParens;
        return;

      case ",":
        this.NextChar();
        this.currentToken = Token.Comma;
        return;
      
      case "—":
        this.NextChar();
        this.currentToken = Token.NaN;
        return;
    }

    // Number from other ability

    // Number?
    if (Number(this.currentChar) || 
      this.currentChar === "0" ||
      this.currentChar == ".") {
      // Capture digits/decimal point
      var sb = "";
      let haveDecimalPoint = false;

      while (
        Number(this.currentChar) || 
        this.currentChar === "0" || 
        (!haveDecimalPoint && this.currentChar == ".")
      ) {
        sb += this.currentChar;
        haveDecimalPoint = this.currentChar == ".";
        this.NextChar();
      }

      // Parse it
      this.num = Number(sb);
      this.currentToken = Token.Number;
      return;
    }

    // // Identifier - starts with letter or underscore
    // if (char.IsLetter(_currentChar) || _currentChar == '_')
    // {
    //     var sb = new StringBuilder();

    //     // Accept letter, digit or underscore
    //     while (char.IsLetterOrDigit(_currentChar) || _currentChar == '_')
    //     {
    //         sb.Append(_currentChar);
    //         NextChar();
    //     }

    //     // Setup token
    //     _identifier = sb.ToString();
    //     _currentToken = Token.Identifier;
    //     return;
    // }
  };
}
