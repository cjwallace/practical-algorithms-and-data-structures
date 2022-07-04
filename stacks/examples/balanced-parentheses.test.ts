import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import isBalanced from "./balanced-parentheses.ts";

Deno.test("Can detect balanced parentheses", () => {
  assertEquals(true, isBalanced("((()))"));
  assertEquals(true, isBalanced("{{([][])}()}"));
});

Deno.test("Can detect unbalanced parentheses", () => {
  assertEquals(false, isBalanced("(()"));
  assertEquals(false, isBalanced("())"));
  assertEquals(false, isBalanced("{[])"));
});

Deno.test("Determines empty string as balanced", () => {
  assertEquals(true, isBalanced(""));
});
