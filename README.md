# Practical Algorithms and Data Structures

Porting Bradfield School of Computer Science's [Practical Algorithms and Data Structures](https://bradfieldcs.com/algos/) to TypeScript. That book is subject to a Creative Commons license, and the content of this repo is licensed in kind.

I have stuck reasonably close (but certainly not 100%) to the spirit of the Python implementations provided. But TypeScript is not Python, and I certainly have not matched expression-for-expression. For-examle: I had to make some typing decisions that are not necessary in the Python version, and insert type guards to accommodate static types.

## Analysis

3. [An Anagram Detection Example](analysis/03-an-anagram-detection-example/)

## Stacks

2. [A Stack Implementation](stacks/stack.ts)
3. [Balanced Parentheses](stacks/examples/balanced-parentheses.ts)
4. [Converting Number Bases](stacks/examples/converting-number-bases.ts)
5. [Infix, Prefix and Postfix Expressions](stacks/examples/infix-prefix-and-postfix-expressions.ts)

## Queues

2. [A Queue Implementation](queues/queue.ts)
3. [Simulating Hot Potato](queues/examples/hot-potato.ts)

## Deques

2. [A Deque Implementation](deques/deque.ts)
3. [Palindrome Checker](deques/examples/palindrome-checker.ts)

## Lists

2. [An Unordered List Implementation](lists/unordered-list.ts)