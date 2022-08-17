class Queue<T> {
  #items: T[];

  constructor(items = []) {
    this.#items = items;
  }

  isEmpty(): boolean {
    return this.size() === 0;
  }

  enqueue(item: T): void {
    // this is O(n)
    this.#items.unshift(item);
  }

  dequeue(): T | undefined {
    return this.#items.pop();
  }

  size(): number {
    return this.#items.length;
  }
}

export default Queue;
