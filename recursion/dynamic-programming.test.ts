import { assertEquals } from "../deps.ts";

import {
  recursiveFib,
  dynamicFib,
  recursiveNumPaths,
  dynamicNumPaths,
} from "./dynamic-programming.ts";

Deno.test(
  "The recursive Fibonacci function can compute the fifth Fibonacci number",
  () => {
    assertEquals(recursiveFib(5), 5);
  }
);

Deno.test(
  "The dynamic Fibonacci function can compute the fifth Fibonacci number",
  () => {
    assertEquals(dynamicFib(5), 5);
  }
);

Deno.test(
  `They dynamic Fibonacci function returns the same value as
  the recursive implementation`,
  () => {
    assertEquals(dynamicFib(0), recursiveFib(0));
    assertEquals(dynamicFib(1), recursiveFib(1));
    assertEquals(dynamicFib(10), recursiveFib(10));
  }
);

Deno.test("Recursive numPaths returns 6 paths through a 2x2 grid", () => {
  assertEquals(recursiveNumPaths(2, 2), 6);
});

Deno.test("Dynamic numPaths returns 6 paths through a 2x2 grid", () => {
  assertEquals(dynamicNumPaths(2, 2), 6);
});

Deno.test(
  "Dynamic numPaths returns the same number of paths as the recursive version",
  () => {
    assertEquals(dynamicNumPaths(1, 1), recursiveNumPaths(1, 1));
    assertEquals(dynamicNumPaths(2, 2), recursiveNumPaths(2, 2));
    assertEquals(dynamicNumPaths(8, 6), recursiveNumPaths(8, 6));
  }
);
