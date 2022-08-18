import { assertEquals } from "../deps.ts";

import Stack from "./stack.ts";

Deno.test("A new stack is empty", () => {
  const stack = new Stack();
  assertEquals(stack.isEmpty(), true);
});

Deno.test("Pushing to a stack makes it non-empty", () => {
  const stack = new Stack();
  stack.push("foo");
  assertEquals(stack.isEmpty(), false);
});

Deno.test("Peeking returns the last item pushed", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  assertEquals(stack.peek(), "bar");
});

Deno.test("Peeking does not modify the stack", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.peek();
  assertEquals("foo", stack.peek());
  assertEquals(stack.size(), 1);
});

Deno.test("Peeking an empty stack returns undefined", () => {
  const stack = new Stack();
  assertEquals(stack.peek(), undefined);
});

Deno.test("The size of the stack is the number of items pushed", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  stack.push("baz");
  assertEquals(stack.size(), 3);
});

Deno.test("Popping from the stack returns the last item", () => {
  const stack = new Stack();
  stack.push("foo");
  const popped = stack.pop();
  assertEquals(popped, "foo");
});

Deno.test("Popping from the stack removes the last item", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  stack.pop();
  assertEquals(stack.size(), 1);
  assertEquals(stack.pop(), "foo");
});

Deno.test("Stack can be initialized from an array", () => {
  const stack = new Stack(["foo", "bar", "baz"]);
  assertEquals(stack.pop(), "baz");
  assertEquals(stack.pop(), "bar");
  assertEquals(stack.size(), 1);
});
