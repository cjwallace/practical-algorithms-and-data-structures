class Node<T> {
  value: T;
  next: Node<T> | undefined;

  constructor(value: T) {
    this.value = value;
  }
}

class UnorderedList<T> {
  head: Node<T> | undefined = undefined;

  isEmpty(): boolean {
    return this.head === undefined;
  }

  add(item: T): void {
    const node = new Node(item);
    node.next = this.head;
    this.head = node;
  }

  append(item: T): void {
    let current = this.head;

    while (current !== undefined) {
      if (current.next === undefined) {
        current.next = new Node(item);
        break;
      }
      current = current.next;
    }
  }

  insert(pos: number, item: T): void {
    let current = this.head;
    let previous = undefined;
    let index = 0;

    while (current !== undefined) {
      if (index === pos) {
        break;
      }
      [previous, current] = [current, current.next];
      index = index + 1;
    }

    if (previous === undefined) {
      this.add(item);
    } else {
      const node = new Node(item);
      previous.next = node;
      node.next = current;
    }
  }

  size(): number {
    let current = this.head;
    let count = 0;

    while (current !== undefined) {
      count = count + 1;
      current = current.next;
    }

    return count;
  }

  search(item: T): boolean {
    let current = this.head;

    while (current !== undefined) {
      if (current.value == item) {
        return true;
      }
      current = current.next;
    }

    return false;
  }

  index(item: T): number {
    let current = this.head;
    let count = 0;

    while (current !== undefined) {
      if (current.value === item) {
        return count;
      }
      current = current.next;
      count = count += 1;
    }
    return -1; // item not in list
  }

  remove(item: T): void {
    let current = this.head;
    let previous = undefined;

    // small divergence from book to prevent infinite loop
    // if item is not present in list
    while (current !== undefined) {
      if (current.value === item) {
        break;
      }
      [previous, current] = [current, current.next];
    }

    if (previous === undefined) {
      this.head = current?.next;
    } else {
      previous.next = current?.next;
    }
  }

  pop(pos: number = this.size() - 1): T | undefined {
    let current = this.head;
    let previous = undefined;
    let index = 0;

    while (current !== undefined) {
      if (index === pos) {
        break;
      }
      [previous, current] = [current, current.next];
      index = index + 1;
    }

    const value = current?.value;
    if (previous === undefined) {
      this.head = undefined;
    } else {
      previous.next = undefined;
    }

    return value;
  }
}

export default UnorderedList;
export { Node };
