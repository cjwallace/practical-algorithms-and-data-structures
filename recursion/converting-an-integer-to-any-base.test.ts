import { assertEquals } from "../deps.ts";

import toString from "./converting-an-integer-to-any-base.ts";

Deno.test("Can convert a decimal number to hex", () => {
  assertEquals(toString(1453, 16), "5ad");
});

Deno.test("Can convert a decimal number to binary", () => {
  assertEquals(toString(10, 2), "1010");
});

Deno.test("Converting a decimal number to base 10 just stringifies", () => {
  assertEquals(toString(1453, 10), "1453");
});
