class Deque<T> {
  #items: T[];

  constructor(items: T[] = []) {
    this.#items = items;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  addFront(item: T): void {
    this.#items.push(item);
  }

  addRear(item: T): void {
    // O(n)
    this.#items.unshift(item);
  }

  removeFront(): T | undefined {
    return this.#items.pop();
  }

  removeRear(): T | undefined {
    // O(n)
    return this.#items.shift();
  }

  size(): number {
    return this.#items.length;
  }
}

export default Deque;
