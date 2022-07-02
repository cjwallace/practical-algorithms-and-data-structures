import { assertEquals } from "https://deno.land/std@0.146.0/testing/asserts.ts";

function anagramCheckingOff(string1: string, string2: string): boolean {
  if (string1.length !== string2.length) {
    return false;
  }

  const string2ToCheckOff: Array<string | null> = string2.split("");

  for (let i = 0; i < string1.length; i++) {
    let letterFound = false;
    for (let j = 0; j < string2.length; j++) {
      if (string1[i] === string2ToCheckOff[j]) {
        string2ToCheckOff[j] = null;
        letterFound = true;
        break;
      }
    }
    if (!letterFound) {
      return false;
    }
  }

  return true;
}

assertEquals(true, anagramCheckingOff("abcd", "dcba"));
assertEquals(false, anagramCheckingOff("abcd", "abcc"));
