import Deque from "../deque.ts";

function isPalindrome(characters: string): boolean {
  const deque = new Deque(characters.split(""));

  while (deque.size() > 1) {
    const first = deque.removeRear();
    const last = deque.removeFront();
    if (first !== last) {
      return false;
    }
  }

  return true;
}

export default isPalindrome;
