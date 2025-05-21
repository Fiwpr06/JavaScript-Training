const TokenTypes = {
  LET: "LET",
  IDENT: "IDENT",
  NUMBER: "NUMBER",
  EQUALS: "EQUALS",
  SEMICOLON: "SEMICOLON",
  PLUS: "PLUS",
};

function tokenize(code) {
  const tokens = [];
  let pos = 0;

  while (pos < code.length) {
    let char = code[pos];

    if (/\s/.test(char)) {
      pos++;
      continue;
    }

    if (/[a-zA-Z]/.test(char)) {
      let ident = "";
      while (pos < code.length && /[a-zA-Z0-9]/.test(code[pos])) {
        ident += code[pos];
        pos++;
      }
      tokens.push({
        type: ident === "let" ? TokenTypes.LET : TokenTypes.IDENT,
        value: ident,
      });
      continue;
    }

    if (/[0-9]/.test(char)) {
      let num = "";
      while (pos < code.length && /[0-9]/.test(code[pos])) {
        num += code[pos];
        pos++;
      }
      tokens.push({ type: TokenTypes.NUMBER, value: num });
      continue;
    }

    if (char === "=") {
      tokens.push({ type: TokenTypes.EQUALS, value: char });
      pos++;
    } else if (char === ";") {
      tokens.push({ type: TokenTypes.SEMICOLON, value: char });
      pos++;
    } else if (char === "+") {
      tokens.push({ type: TokenTypes.PLUS, value: char });
      pos++;
    } else {
      throw new Error(`Invalid character: ${char}`);
    }
  }

  return tokens;
}

class LetStatement {
  constructor(name, value) {
    this.name = name;
    this.value = value;
  }
}

class Number {
  constructor(value) {
    this.value = parseInt(value);
  }
}

class BinaryExpression {
  constructor(left, operator, right) {
    this.left = left;
    this.operator = operator;
    this.right = right;
  }
}

function parse(tokens) {
  let pos = 0;

  function parseExpression() {
    if (tokens[pos].type === TokenTypes.NUMBER) {
      const node = new Number(tokens[pos].value);
      pos++;
      if (pos < tokens.length && tokens[pos].type === TokenTypes.PLUS) {
        const op = tokens[pos].value;
        pos++;
        const [rightNode, rightPos] = parseExpression();
        return [new BinaryExpression(node, op, rightNode), rightPos];
      }
      return [node, pos];
    }

    if (tokens[pos].type === TokenTypes.IDENT) {
      const ident = tokens[pos].value;
      pos++;
      return [ident, pos];
    }

    throw new SyntaxError("Invalid expression");
  }

  if (tokens[pos].type === TokenTypes.LET) {
    pos++;
    if (tokens[pos].type !== TokenTypes.IDENT) {
      throw new SyntaxError("Expected identifier");
    }
    const name = tokens[pos].value;
    pos++;
    if (tokens[pos].type !== TokenTypes.EQUALS) {
      throw new SyntaxError('Expected "="');
    }
    pos++;
    const [value, newPos] = parseExpression();
    pos = newPos;
    if (pos < tokens.length && tokens[pos].type !== TokenTypes.SEMICOLON) {
      throw new SyntaxError('Expected ";"');
    }
    pos++;
    return new LetStatement(name, value);
  }
  throw new SyntaxError('Expected "let"');
}

function evaluate(node, env = {}) {
  if (node instanceof LetStatement) {
    const value = evaluate(node.value, env);
    env[node.name] = value;
    return env;
  }

  if (node instanceof Number) {
    return node.value;
  }

  if (node instanceof BinaryExpression) {
    const left = evaluate(node.left, env);
    const right = evaluate(node.right, env);
    if (node.operator === "+") {
      return left + right;
    }
  }

  if (typeof node === "string") {
    return env[node] || 0;
  }
}

const code = "let x = 5 + 3;";
const tokens = tokenize(code);
console.log("Tokens:", tokens);
const ast = parse(tokens);
console.log("AST:", ast);
const env = evaluate(ast);
console.log("Environment:", env);

let x = 5 + 3;
