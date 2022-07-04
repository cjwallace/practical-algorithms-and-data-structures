import Stack from "../stack.ts";

// this is perhaps too forgiving, but we're following the book, where no
// checking is done to ensure the string is composed only of the defined symbols
const PAIRINGS: { [symbol: string]: string } = {
  "(": ")" as string,
  "{": "}" as string,
  "[": "]" as string,
};

function isBalanced(symbols: string): boolean {
  const stack = new Stack<string>();

  for (const symbol of symbols) {
    if (symbol in PAIRINGS) {
      stack.push(symbol);
    } else {
      const popped = stack.pop();
      if (popped === undefined || symbol !== PAIRINGS[popped]) {
        return false;
      }
    }
  }

  return stack.isEmpty();
}

export default isBalanced;
