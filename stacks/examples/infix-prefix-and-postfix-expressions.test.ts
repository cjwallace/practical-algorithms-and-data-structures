import { assertEquals } from "../../deps.ts";

import {
  infixToPostfix,
  evaluatePostfix,
} from "./infix-prefix-and-postfix-expressions.ts";

Deno.test(
  "infixToPostfix can convert infix expressions to postfix expressions",
  () => {
    assertEquals(infixToPostfix("A * B + C * D"), "A B * C D * +");
    assertEquals(
      infixToPostfix("( A + B ) * C - ( D - E ) * ( F + G )"),
      "A B + C * D E - F G + * -"
    );
    assertEquals(infixToPostfix("( A + B ) * ( C + D )"), "A B + C D + *");
    assertEquals(infixToPostfix("( A + B ) * C"), "A B + C *");
    assertEquals(infixToPostfix("A + B * C"), "A B C * +");
  }
);

Deno.test("evaluatePostfix can evaluate postfix expressions", () => {
  assertEquals(evaluatePostfix("7 8 + 3 2 + /"), 3);
  assertEquals(evaluatePostfix("0 8 * 0 8 * +"), 0);
  assertEquals(evaluatePostfix("9 7 * 7 + 9 3 * + 8 2 - 2 / +"), 100);
});

Deno.test(
  "Can evaluate infix expressions by first converting them to postfix",
  () => {
    assertEquals(evaluatePostfix(infixToPostfix("1+2")), 3);
    assertEquals(
      evaluatePostfix(infixToPostfix("((5 / 8) * (9 - 3) + 2) * 0")),
      0
    );
    assertEquals(
      evaluatePostfix(infixToPostfix("9 / 3 + 2 * 2 + (4 - 1)")),
      10
    );
  }
);
