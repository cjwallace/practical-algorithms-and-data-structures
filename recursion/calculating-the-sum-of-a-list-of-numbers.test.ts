import { assertEquals } from "../deps.ts";

import {
  iterativeSum,
  sumOf,
} from "./calculating-the-sum-of-a-list-of-numbers.ts";

Deno.test("iterativeSum can calculate the sum of a list of numbers", () => {
  assertEquals(iterativeSum([1, 3, 5, 7, 9]), 25);
  assertEquals(iterativeSum([-1, -1, -1]), -3);
  assertEquals(iterativeSum([1, -1, 1, -1]), 0);
});

Deno.test(
  "sumOf can calculate the some of a list of numbers (recursively)",
  () => {
    assertEquals(sumOf([1, 3, 5, 7, 9]), 25);
    assertEquals(sumOf([-1, -1, -1]), -3);
    assertEquals(sumOf([1, -1, 1, -1]), 0);
  }
);
