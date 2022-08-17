import { assertEquals } from "../../deps.ts";

import isBalanced from "./balanced-parentheses.ts";

Deno.test("Can detect balanced parentheses", () => {
  assertEquals(isBalanced("((()))"), true);
  assertEquals(isBalanced("{{([][])}()}"), true);
});

Deno.test("Can detect unbalanced parentheses", () => {
  assertEquals(isBalanced("(()"), false);
  assertEquals(isBalanced("())"), false);
  assertEquals(isBalanced("{[])"), false);
});

Deno.test("Determines empty string as balanced", () => {
  assertEquals(isBalanced(""), true);
});
