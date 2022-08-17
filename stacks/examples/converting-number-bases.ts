import Stack from "../stack.ts";

type Binary = string;

function convertToBinary(decimalNumber: number): Binary {
  const remainderStack = new Stack<number>();

  while (decimalNumber > 0) {
    const remainder = decimalNumber % 2;
    remainderStack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  let binaryDigits = "";
  while (!remainderStack.isEmpty()) {
    binaryDigits = binaryDigits.concat(String(remainderStack.pop()));
  }

  return binaryDigits;
}

function convertToBase(decimalNumber: number, base: number): string {
  const DIGITS = "0123456789abcdef";
  const remainderStack = new Stack<number>();

  while (decimalNumber > 0) {
    const remainder = decimalNumber % base;
    remainderStack.push(remainder);
    decimalNumber = Math.floor(decimalNumber / base);
  }

  let newDigits = "";
  while (!remainderStack.isEmpty()) {
    const elem = remainderStack.pop();
    // stack could be empty
    if (typeof elem === "number") {
      newDigits = newDigits.concat(DIGITS[elem]);
    }
  }

  return newDigits;
}

export { convertToBinary, convertToBase };
