import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import Stack from "./stack.ts";

Deno.test("A new stack is empty", () => {
  const stack = new Stack();
  assertEquals(true, stack.isEmpty());
});

Deno.test("Pushing to a stack makes it non-empty", () => {
  const stack = new Stack();
  stack.push("foo");
  assertEquals(false, stack.isEmpty());
});

Deno.test("Peeking returns the last item pushed", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  assertEquals("bar", stack.peek());
});

Deno.test("Peeking does not modify the stack", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.peek();
  assertEquals("foo", stack.peek());
  assertEquals(1, stack.size());
});

Deno.test("Peeking an empty stack returns undefined", () => {
  const stack = new Stack();
  assertEquals(undefined, stack.peek());
});

Deno.test("The size of the stack is the number of items pushed", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  stack.push("baz");
  assertEquals(3, stack.size());
});

Deno.test("Popping from the stack returns the last item", () => {
  const stack = new Stack();
  stack.push("foo");
  const popped = stack.pop();
  assertEquals("foo", popped);
});

Deno.test("Popping from the stack removes the last item", () => {
  const stack = new Stack();
  stack.push("foo");
  stack.push("bar");
  stack.pop();
  assertEquals(1, stack.size());
  assertEquals("foo", stack.pop());
});
