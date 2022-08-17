import Stack from "../stack.ts";

type Operator = keyof typeof OPERATION;
type OperatorOrParen = Operator | "(";

const OPERATION = {
  "*": (a: number, b: number) => a * b,
  "/": (a: number, b: number) => a / b,
  "-": (a: number, b: number) => a - b,
  "+": (a: number, b: number) => a + b,
};

const PRECEDENCE = {
  "*": 3,
  "/": 3,
  "+": 2,
  "-": 2,
  "(": 1,
};

const CHARACTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DIGITS = "0123456789";
const LEFT_PAREN = "(";
const RIGHT_PAREN = ")";

function isOperator(token: string): token is Operator {
  return Object.keys(OPERATION).includes(token);
}

function isOperatorOrParen(token: string): token is OperatorOrParen {
  return Object.keys(PRECEDENCE).includes(token);
}

function infixToPostfix(infixExpression: string): string {
  const operationStack = new Stack<OperatorOrParen>();
  let postfix = "";
  const tokens = infixExpression.split("");

  for (const token of tokens) {
    if (CHARACTERS.includes(token) || DIGITS.includes(token)) {
      postfix += token;
    } else if (token === LEFT_PAREN) {
      operationStack.push(token);
    } else if (token === RIGHT_PAREN) {
      let topToken = operationStack.pop();
      while (topToken !== LEFT_PAREN) {
        postfix += topToken;
        topToken = operationStack.pop();
      }
    } else if (isOperatorOrParen(token)) {
      while (
        !operationStack.isEmpty() &&
        // above conditionals are not type guards, so (unsafely) assert types
        PRECEDENCE[operationStack.peek() as OperatorOrParen] >=
          PRECEDENCE[token]
      ) {
        postfix += operationStack.pop();
      }
      operationStack.push(token);
    }
  }

  while (!operationStack.isEmpty()) {
    postfix += operationStack.pop();
  }
  return postfix.split("").join(" ");
}

function evaluatePostfix(postfixExpression: string): number {
  const operandStack = new Stack<string | number>();

  for (const token of postfixExpression) {
    if (DIGITS.includes(token)) {
      operandStack.push(parseInt(token));
    } else if (isOperator(token)) {
      const b = operandStack.pop();
      const a = operandStack.pop();
      if (typeof a === "number" && typeof b === "number") {
        const result = OPERATION[token as Operator](a, b);
        operandStack.push(result);
      }
    }
  }
  const result = operandStack.pop();
  if (typeof result !== "number") {
    throw new Error("Something went wrong");
  }
  return result;
}

export { infixToPostfix, evaluatePostfix };
