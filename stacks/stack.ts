class Stack<T> {
  #items: T[];

  constructor(items = []) {
    this.#items = items;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  pop(): unknown {
    return this.#items.pop();
  }

  push(item: T): void {
    this.#items.push(item);
  }

  peek(): T | undefined {
    return this.#items[this.#items.length - 1];
  }

  size(): number {
    return this.#items.length;
  }
}

export default Stack;
