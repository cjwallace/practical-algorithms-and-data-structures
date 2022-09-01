// In this example, we deviate from the book, which uses the python
// call stack to simulate a Stack. We could do the same in TS (using
// the JavaScript call stack), but it is much less straightforward to
// test console.log output than it is to test (even mutable) functions.
// As such, we take the step suggested in the book and use explicit
// Stacks for the poles.

import Stack from "../stacks/stack.ts";

function moveTower<T>(
  poles: Stack<T>[],
  height: number,
  fromPole: number,
  toPole: number,
  withPole: number
): void {
  if (height >= 1) {
    moveTower(poles, height - 1, fromPole, withPole, toPole);
    moveDisk(poles, fromPole, toPole);
    moveTower(poles, height - 1, withPole, toPole, fromPole);
  }
}

function moveDisk<T>(
  poles: Stack<T>[],
  fromPole: number,
  toPole: number
): void {
  const disk = poles[fromPole].pop();
  if (disk !== undefined) {
    poles[toPole].push(disk);
  }
  console.log(`moving disk ${disk} from ${fromPole} to ${toPole}`);
}

export default moveTower;
