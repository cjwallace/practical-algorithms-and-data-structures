import { assertEquals } from "../deps.ts";

import UnorderedList, { Node } from "./unordered-list.ts";

Deno.test("Can create a Node containing a value", () => {
  const node = new Node(8);
  assertEquals(node.value, 8);
});

Deno.test("Can create an empty unordered list", () => {
  const list = new UnorderedList();
  assertEquals(list.isEmpty(), true);
});

Deno.test("Can add an item to a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  assertEquals(list.head?.value, "foo");
});

Deno.test("Can add multiple consecutive items to a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  assertEquals(list.head?.value, "baz");
});

Deno.test("Can calculate the size of a list", () => {
  const list = new UnorderedList();
  assertEquals(list.size(), 0);
  list.add("foo");
  assertEquals(list.size(), 1);
  list.add("bar");
  assertEquals(list.size(), 2);
  list.add("baz");
  assertEquals(list.size(), 3);
});

Deno.test("Can search for an item in a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  assertEquals(list.search("baz"), true);
  assertEquals(list.search("quux"), false);
});

Deno.test("Can remove an item from a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  list.remove("bar");
  assertEquals(list.search("bar"), false);
  assertEquals(list.size(), 2);
});

Deno.test("Can append an item to the end of the list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.append("baz");
  assertEquals(list.pop(), "baz");
});

Deno.test("Can pop an item from the end of the list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.append("baz");
  assertEquals(list.pop(), "baz");
  assertEquals(list.pop(), "foo");
  assertEquals(list.pop(), "bar");
});

Deno.test("Can pop an item from an arbitrary position in the list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  assertEquals(list.pop(2), "foo");
});

Deno.test("Can find the index of an item in a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  assertEquals(list.index("foo"), 2);
  assertEquals(list.index("bar"), 1);
  list.append("quux");
  assertEquals(list.index("quux"), 3);
});

Deno.test("Can insert an item at a position in a list", () => {
  const list = new UnorderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  list.insert(1, "quux");
  assertEquals(list.index("quux"), 1);
  list.insert(1, "xyzzy");
  assertEquals(list.index("xyzzy"), 1);
  assertEquals(list.index("quux"), 2);
});
