import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

function anagramCountCompare(string1: string, string2: string): boolean {
  function getLetterPosition(letter: string): number {
    return letter.charCodeAt(0) - "a".charCodeAt(0);
  }

  const string1LetterCounts = new Array(26).fill(0);
  const string2LetterCounts = new Array(26).fill(0);

  for (let i = 0; i < string1.length; i++) {
    const letterPosition = getLetterPosition(string1[i]);
    string1LetterCounts[letterPosition]++;
  }

  for (let i = 0; i < string2.length; i++) {
    const letterPosition = getLetterPosition(string2[i]);
    string2LetterCounts[letterPosition]++;
  }

  for (let i = 0; i < string1LetterCounts.length; i++) {
    if (string1LetterCounts[i] !== string2LetterCounts[i]) {
      return false;
    }
  }

  return true;
}

assertEquals(true, anagramCountCompare("apple", "pleap"));
assertEquals(false, anagramCountCompare("apple", "applf"));

function anagramCountCompareWithReduce(
  string1: string,
  string2: string
): boolean {
  function letterCountReducer(
    letterCounts: { [letter: string]: number },
    letter: string
  ) {
    if (letterCounts[letter]) {
      letterCounts[letter]++;
    } else {
      letterCounts[letter] = 1;
    }
    return letterCounts;
  }

  const string1LetterCounts = string1.split("").reduce(letterCountReducer, {});
  const string2LetterCounts = string2.split("").reduce(letterCountReducer, {});

  for (let letter in string1LetterCounts) {
    if (string1LetterCounts[letter] !== string2LetterCounts[letter]) {
      return false;
    }
  }

  return string1.length === string2.length;
}

assertEquals(true, anagramCountCompareWithReduce("apple", "pleap"));
assertEquals(false, anagramCountCompareWithReduce("apple", "applf"));
