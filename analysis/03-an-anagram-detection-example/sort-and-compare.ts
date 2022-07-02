import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

function anagramSortAndCompare(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) return false;

  const sortedString1 = string1.split("").sort();
  const sortedString2 = string2.split("").sort();

  for (let i = 0; i < sortedString1.length; i++) {
    if (sortedString1[i] !== sortedString2[i]) return false;
  }

  return true;
}

assertEquals(true, anagramSortAndCompare("abcde", "edcba"));
assertEquals(false, anagramSortAndCompare("abcde", "abcd"));
