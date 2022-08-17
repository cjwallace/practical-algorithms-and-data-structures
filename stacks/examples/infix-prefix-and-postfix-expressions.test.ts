import { assertEquals } from "../../deps.ts";

import {
  infixToPostfix,
  evaluatePostfix,
} from "./infix-prefix-and-postfix-expressions.ts";

Deno.test(
  "infixToPostfix can convert infix expressions to postfix expressions",
  () => {
    assertEquals("A B * C D * +", infixToPostfix("A * B + C * D"));
    assertEquals(
      "A B + C * D E - F G + * -",
      infixToPostfix("( A + B ) * C - ( D - E ) * ( F + G )")
    );
    assertEquals("A B + C D + *", infixToPostfix("( A + B ) * ( C + D )"));
    assertEquals("A B + C *", infixToPostfix("( A + B ) * C"));
    assertEquals("A B C * +", infixToPostfix("A + B * C"));
  }
);

Deno.test("evaluatePostfix can evaluate postfix expressions", () => {
  assertEquals(3, evaluatePostfix("7 8 + 3 2 + /"));
  assertEquals(0, evaluatePostfix("0 8 * 0 8 * +"));
  assertEquals(100, evaluatePostfix("9 7 * 7 + 9 3 * + 8 2 - 2 / +"));
});

Deno.test(
  "Can evaluate infix expressions by first converting them to postfix",
  () => {
    assertEquals(3, evaluatePostfix(infixToPostfix("1+2")));
    assertEquals(
      0,
      evaluatePostfix(infixToPostfix("((5 / 8) * (9 - 3) + 2) * 0"))
    );
    assertEquals(
      10,
      evaluatePostfix(infixToPostfix("9 / 3 + 2 * 2 + (4 - 1)"))
    );
  }
);
