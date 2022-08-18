import { assertEquals } from "../deps.ts";

import Queue from "./queue.ts";

Deno.test("A new queue is empty", () => {
  const queue = new Queue();
  assertEquals(queue.isEmpty(), true);
});

Deno.test("Enqueuing an item makes a queue non-empty", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  assertEquals(queue.isEmpty(), false);
});

Deno.test("The size of the queue is the number of items enqueued", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  queue.enqueue("bar");
  queue.enqueue("baz");
  assertEquals(queue.size(), 3);
});

Deno.test("Dequeuing an item returns the first item enqueued", () => {
  const queue = new Queue();
  queue.enqueue("foo");
  queue.enqueue("bar");
  const popped = queue.dequeue();
  assertEquals(popped, "foo");
});

Deno.test("Queue can be initialized from an array", () => {
  const queue = new Queue(["foo", "bar", "baz"]);
  assertEquals(queue.dequeue(), "baz");
  assertEquals(queue.dequeue(), "bar");
  assertEquals(queue.size(), 1);
});
