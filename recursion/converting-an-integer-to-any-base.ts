function toString(n: number, base: number): string {
  const CHAR_FOR_INT = "0123456789abcdef";

  if (n < base) {
    return CHAR_FOR_INT[n];
  }

  return toString(Math.floor(n / base), base) + CHAR_FOR_INT[n % base];
}

export default toString;
