import { assertEquals } from "../../deps.ts";

import isPalindrome from "./palindrome-checker.ts";

Deno.test("isPalindrome detects palindromes", () => {
  assertEquals(isPalindrome("radar"), true);
  assertEquals(isPalindrome("a"), true);
  assertEquals(isPalindrome("1001"), true);
});

Deno.test("isPalindrome rejects non-palindromes", () => {
  assertEquals(isPalindrome("lsdkjfskf"), false);
  assertEquals(isPalindrome("ab"), false);
  assertEquals(isPalindrome("notlob"), false);
});
