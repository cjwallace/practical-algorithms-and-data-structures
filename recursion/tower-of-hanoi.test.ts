import { assertEquals } from "../deps.ts";

import Stack from "../stacks/stack.ts";
import moveTower from "./tower-of-hanoi.ts";

Deno.test("The base case of moving one disk works", () => {
  const poles = [new Stack([1]), new Stack<number>()];
  // withPole is irrelevant for a single move
  // (set as -1 for illustration)
  moveTower(poles, 1, 0, 1, -1);
  assertEquals(poles[1].peek(), 1);
  assertEquals(poles[0].isEmpty(), true);
});

Deno.test("We can move a stack of four items across three poles", () => {
  const poles = [
    new Stack(["d", "c", "b", "a"]),
    new Stack<string>(),
    new Stack<string>(),
  ];
  moveTower(poles, 4, 0, 2, 1);
  assertEquals(poles[0].isEmpty(), true);
  assertEquals(poles[1].isEmpty(), true);
  assertEquals(poles[2].size(), 4);
  assertEquals(poles[2].peek(), "a");
});
