import { assertEquals } from "../../deps.ts";

import hotPotato from "./hot-potato.ts";

Deno.test("Can play hot potato", () => {
  const potatos = ["Bill", "David", "Susan", "Jane", "Kent", "Brad"];
  assertEquals(hotPotato(potatos, 2), "Bill");
  assertEquals(hotPotato(potatos, 3), "Kent");
  assertEquals(hotPotato(potatos, 9), "David");
});
