import { assertEquals } from "../deps.ts";

import OrderedList from "./ordered-list.ts";

// OrderedList inherits from UnorderedList.
// The tests here will cover only the changed methods and behaviour
// an ordered list.

Deno.test("Can add an item to a list", () => {
  const list = new OrderedList();
  list.add("foo");
  assertEquals(list.head?.value, "foo");
});

Deno.test(
  "Can add multiple string items to a list, and they will be ordered",
  () => {
    const list = new OrderedList();
    list.add("b");
    list.add("a");
    list.add("c");
    assertEquals(list.head?.value, "a");
  }
);

Deno.test(
  "Can add multiple number items to a list, and they will be ordered",
  () => {
    const list = new OrderedList();
    list.add(3);
    list.add(100);
    list.add(0);
    assertEquals(list.head?.value, 0);
  }
);

Deno.test("Can search for an item in a list", () => {
  const list = new OrderedList();
  list.add("foo");
  list.add("bar");
  list.add("baz");
  assertEquals(list.search("baz"), true);
  assertEquals(list.search("quux"), false);
});

Deno.test(
  "Inserting into a specific position of an ordered list does nothing, since it may break sort order",
  () => {
    const list = new OrderedList();
    list.add("a");
    list.add("c");
    list.insert(1, "b");
    assertEquals(list.size(), 2);
    assertEquals(list.search("b"), false);
  }
);

Deno.test(
  "Appending to an ordered list does nothing, since it may break sort order",
  () => {
    const list = new OrderedList();
    list.add("a");
    list.add("b");
    list.append("c");
    assertEquals(list.size(), 2);
    assertEquals(list.search("c"), false);
  }
);
