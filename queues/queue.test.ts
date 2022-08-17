import { assertEquals } from "../deps.ts";

import Queue from "./queue.ts";

Deno.test("A new queue is empty", () => {
  const queue = new Queue();
  assertEquals(true, queue.isEmpty());
});

Deno.test("Enqueuing an item makes a queue non-empty", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  assertEquals(false, queue.isEmpty());
});

Deno.test("The size of the queue is the number of items enqueued", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  queue.enqueue("bar");
  queue.enqueue("baz");
  assertEquals(3, queue.size());
});

Deno.test("Dequeuing an item returns the first item enqueued", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  queue.enqueue("bar");
  const popped = queue.dequeue();
  assertEquals("foo", popped);
});

// Deno.test("Popping from the stack removes the last item", () => {
//   const stack = new Stack();
//   stack.push("foo");
//   stack.push("bar");
//   stack.pop();
//   assertEquals(1, stack.size());
//   assertEquals("foo", stack.pop());
// });
