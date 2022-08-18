import { assertEquals } from "../deps.ts";

import Deque from "./deque.ts";

Deno.test("A new deque is empty", () => {
  const deque = new Deque();
  assertEquals(deque.isEmpty(), true);
});

Deno.test("Adding an item to the front of the deque makes it non-empty", () => {
  const deque = new Deque();
  deque.addFront("foo");
  assertEquals(deque.isEmpty(), false);
});

Deno.test("Adding an item to the rear of the deque makes it non-empty", () => {
  const deque = new Deque();
  deque.addRear("foo");
  assertEquals(deque.isEmpty(), false);
});

Deno.test("Can remove an item from the front", () => {
  const deque = new Deque();
  deque.addFront("foo");
  deque.addRear("bar");
  assertEquals(deque.removeFront(), "foo");
  assertEquals(deque.removeFront(), "bar");
});

Deno.test("Can remove an item from the rear", () => {
  const deque = new Deque();
  deque.addFront("foo");
  deque.addRear("bar");
  assertEquals(deque.removeRear(), "bar");
  assertEquals(deque.removeRear(), "foo");
});

Deno.test("Queuing items increases the size of the deque", () => {
  const deque = new Deque();
  deque.addFront("foo");
  deque.addFront("bar");
  deque.addFront("baz");
  assertEquals(deque.size(), 3);
});

Deno.test("Deque can function as a stack", () => {
  const deque = new Deque();
  deque.addFront("foo");
  deque.addFront("bar");
  deque.addFront("baz");
  assertEquals(deque.removeFront(), "baz");
  assertEquals(deque.removeFront(), "bar");
  assertEquals(deque.removeFront(), "foo");
});

Deno.test("Deque can function as a queue", () => {
  const deque = new Deque();
  deque.addFront("foo");
  deque.addFront("bar");
  deque.addFront("baz");
  assertEquals(deque.removeRear(), "foo");
  assertEquals(deque.removeRear(), "bar");
  assertEquals(deque.removeRear(), "baz");
});

Deno.test("Deque can be initialized from an array", () => {
  const deque = new Deque(["foo", "bar", "baz"]);
  assertEquals(deque.removeRear(), "foo");
  assertEquals(deque.removeFront(), "baz");
  assertEquals(deque.size(), 1);
});
