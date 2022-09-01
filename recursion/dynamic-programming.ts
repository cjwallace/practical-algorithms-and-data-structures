function recursiveFib(n: number): number {
  if (n <= 1) {
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

function dynamicFib(n: number): number {
  let a = 0;
  let b = 1;
  for (let i = 0; i < n; i++) {
    [a, b] = [a + b, a];
  }
  return a;
}

function recursiveNumPaths(height: number, width: number): number {
  if (height === 0 || width === 0) {
    return 1;
  }
  return (
    recursiveNumPaths(height, width - 1) + recursiveNumPaths(height - 1, width)
  );
}

function dynamicNumPaths(height: number, width: number) {
  const memo: number[][] = Array.from(Array(height + 1)).map(() =>
    Array(width + 1).fill(1)
  );

  for (let i = 1; i < memo.length; i++) {
    const row = memo[i];
    for (let j = 1; j < row.length; j++) {
      memo[i][j] = memo[i - 1][j] + memo[i][j - 1];
    }
  }
  return memo[height][width];
}

export { recursiveFib, dynamicFib, recursiveNumPaths, dynamicNumPaths };
