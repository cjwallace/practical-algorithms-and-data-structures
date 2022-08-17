import { assertEquals } from "../../deps.ts";

import { convertToBinary, convertToBase } from "./converting-number-bases.ts";

Deno.test("convertToBinary can convert positive integers to binary", () => {
  assertEquals(convertToBinary(1), "1");
  assertEquals(convertToBinary(42), "101010");
  assertEquals(convertToBinary(7), "111");
  assertEquals(convertToBinary(63), "111111");
  assertEquals(convertToBinary(9001), "10001100101001");
});

Deno.test("convertToBinary converts zero to empty binary", () => {
  // this is a weird case
  assertEquals(convertToBinary(0), "");
});

Deno.test("convertToBase can convert positive integers to binary", () => {
  assertEquals(convertToBase(0, 2), "");
  assertEquals(convertToBase(1, 2), "1");
  assertEquals(convertToBase(42, 2), "101010");
  assertEquals(convertToBase(7, 2), "111");
  assertEquals(convertToBase(63, 2), "111111");
  assertEquals(convertToBase(9001, 2), "10001100101001");
});

Deno.test("convertToBase can convert positive integers to octal", () => {
  assertEquals(convertToBase(0, 8), "");
  assertEquals(convertToBase(1, 8), "1");
  assertEquals(convertToBase(42, 8), "52");
  assertEquals(convertToBase(7, 8), "7");
  assertEquals(convertToBase(63, 8), "77");
  assertEquals(convertToBase(9001, 8), "21451");
});

Deno.test("convertToBase can convert positive integers to hexadecimal", () => {
  assertEquals(convertToBase(0, 16), "");
  assertEquals(convertToBase(1, 16), "1");
  assertEquals(convertToBase(42, 16), "2a");
  assertEquals(convertToBase(7, 16), "7");
  assertEquals(convertToBase(63, 16), "3f");
  assertEquals(convertToBase(9001, 16), "2329");
  assertEquals(convertToBase(2863311530, 16), "aaaaaaaa");
});

Deno.test("convertToBase works for all bases for 2 <= base <= 16", () => {
  assertEquals(convertToBase(42, 2), "101010");
  assertEquals(convertToBase(42, 3), "1120");
  assertEquals(convertToBase(42, 4), "222");
  assertEquals(convertToBase(42, 5), "132");
  assertEquals(convertToBase(42, 6), "110");
  assertEquals(convertToBase(42, 7), "60");
  assertEquals(convertToBase(42, 8), "52");
  assertEquals(convertToBase(42, 9), "46");
  assertEquals(convertToBase(42, 10), "42");
  assertEquals(convertToBase(42, 11), "39");
  assertEquals(convertToBase(42, 12), "36");
  assertEquals(convertToBase(42, 13), "33");
  assertEquals(convertToBase(42, 14), "30");
  assertEquals(convertToBase(42, 15), "2c");
  assertEquals(convertToBase(42, 16), "2a");
});
