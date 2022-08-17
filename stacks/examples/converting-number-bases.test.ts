import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

import { convertToBinary, convertToBase } from "./converting-number-bases.ts";

Deno.test("convertToBinary can convert positive integers to binary", () => {
  assertEquals("1", convertToBinary(1));
  assertEquals("101010", convertToBinary(42));
  assertEquals("111", convertToBinary(7));
  assertEquals("111111", convertToBinary(63));
  assertEquals("10001100101001", convertToBinary(9001));
});

Deno.test("convertToBinary converts zero to empty binary", () => {
  // this is a weird case
  assertEquals("", convertToBinary(0));
});

Deno.test("convertToBase can convert positive integers to binary", () => {
  assertEquals("", convertToBase(0, 2));
  assertEquals("1", convertToBase(1, 2));
  assertEquals("101010", convertToBase(42, 2));
  assertEquals("111", convertToBase(7, 2));
  assertEquals("111111", convertToBase(63, 2));
  assertEquals("10001100101001", convertToBase(9001, 2));
});

Deno.test("convertToBase can convert positive integers to octal", () => {
  assertEquals("", convertToBase(0, 8));
  assertEquals("1", convertToBase(1, 8));
  assertEquals("52", convertToBase(42, 8));
  assertEquals("7", convertToBase(7, 8));
  assertEquals("77", convertToBase(63, 8));
  assertEquals("21451", convertToBase(9001, 8));
});

Deno.test("convertToBase can convert positive integers to hexadecimal", () => {
  assertEquals("", convertToBase(0, 16));
  assertEquals("1", convertToBase(1, 16));
  assertEquals("2a", convertToBase(42, 16));
  assertEquals("7", convertToBase(7, 16));
  assertEquals("3f", convertToBase(63, 16));
  assertEquals("2329", convertToBase(9001, 16));
  assertEquals("aaaaaaaa", convertToBase(2863311530, 16));
});

Deno.test("convertToBase works for all bases for 2 <= base <= 16", () => {
  assertEquals("101010", convertToBase(42, 2));
  assertEquals("1120", convertToBase(42, 3));
  assertEquals("222", convertToBase(42, 4));
  assertEquals("132", convertToBase(42, 5));
  assertEquals("110", convertToBase(42, 6));
  assertEquals("60", convertToBase(42, 7));
  assertEquals("52", convertToBase(42, 8));
  assertEquals("46", convertToBase(42, 9));
  assertEquals("42", convertToBase(42, 10));
  assertEquals("39", convertToBase(42, 11));
  assertEquals("36", convertToBase(42, 12));
  assertEquals("33", convertToBase(42, 13));
  assertEquals("30", convertToBase(42, 14));
  assertEquals("2c", convertToBase(42, 15));
  assertEquals("2a", convertToBase(42, 16));
});
