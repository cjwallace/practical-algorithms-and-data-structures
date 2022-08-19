function iterativeSum(numbers: number[]): number {
  let total = 0;

  for (const n of numbers) {
    total += n;
  }

  return total;
}

function sumOf(numbers: number[]): number {
  if (numbers.length === 0) {
    return 0;
  }

  return numbers[0] + sumOf(numbers.slice(1));
}

export { iterativeSum, sumOf };
