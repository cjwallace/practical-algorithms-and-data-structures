# Practical Algorithms and Data Structures

This repo is a work-in-progress port of Bradfield School of Computer Science's [Practical Algorithms and Data Structures](https://bradfieldcs.com/algos/) to TypeScript. That book is subject to a Creative Commons license (having itself been forked from another CC-licensed book), and the source code may be found [here](https://github.com/Bradfield/algos/). The content of this repo is licensed in kind.

I have stuck reasonably close (but certainly not 100%) to the spirit of the Python implementations provided. But TypeScript is not Python, and I certainly have not matched expression-for-expression. For example, I had to make some typing decisions that are not necessary in the Python version, and insert type guards to accommodate static types.

Tests accompany the code, usually in the corresponding `whatever.test.ts` file. The tests assume the [Deno](https://deno.land/) runtime, because Deno provides a low-fuss way to get a TypeScript project running with testing batteries included 🦕 The full suite can be run from the project directory with `deno test`.

The non-test code is not particular to Deno, and it is suitable for transpiling to JavaScript with your favourite TypeScript toolchain. Most likely, you are here to read the code, not run it. None of these implementations should be considered robust, performant, or suitable for production use.

Hopefully these translations make the book just a little bit more accessible to folks who know JS or TS, but not Python. 🙃

## Table of contents

The numbers refer to the corresponding sections of the [book](https://bradfieldcs.com/algos/).

### Analysis

3. [An Anagram Detection Example](analysis/03-an-anagram-detection-example/)

### Stacks

2. [A Stack Implementation](stacks/stack.ts)
3. [Balanced Parentheses](stacks/examples/balanced-parentheses.ts)
4. [Converting Number Bases](stacks/examples/converting-number-bases.ts)
5. [Infix, Prefix and Postfix Expressions](stacks/examples/infix-prefix-and-postfix-expressions.ts)

### Queues

2. [A Queue Implementation](queues/queue.ts)
3. [Simulating Hot Potato](queues/examples/hot-potato.ts)

### Deques

2. [A Deque Implementation](deques/deque.ts)
3. [Palindrome Checker](deques/examples/palindrome-checker.ts)

### Lists

2. [An Unordered List Implementation](lists/unordered-list.ts)
3. [An Ordered List Implementation](lists/ordered-list.ts)

### Recursion

2. [Calculating the Sum of a List of Numbers](recursion/calculating-the-sum-of-a-list-of-numbers.ts)
4. [Converting an Integer to Any Base](recursion/converting-an-integer-to-any-base.ts)
5. [Tower of Hanoi](recursion/tower-of-hanoi.ts)
6. [Dynamic Programming](recursion/dynamic-programming.ts)