import UnorderedList, { Node } from "./unordered-list.ts";

class OrderedList<T> extends UnorderedList<T> {
  search(item: T): boolean {
    let current = this.head;

    while (current !== undefined) {
      if (current.value === item) {
        return true;
      }
      if (current.value > item) {
        return false;
      }
      current = current.next;
    }

    return false;
  }

  add(item: T): void {
    let current = this.head;
    let previous = undefined;

    while (current !== undefined) {
      if (current.value > item) {
        break;
      }
      [previous, current] = [current, current.next];
    }

    const node = new Node(item);
    if (previous === undefined) {
      node.next = this.head;
      this.head = node;
    } else {
      node.next = current;
      previous.next = node;
    }
  }

  append(_item: T): void {
    // append is a no-op for an ordered list,
    // since it could break ordering
  }

  insert(_pos: number, _item: T): void {
    // assert is a no-op for an ordered list,
    // since it could break ordering
  }

  // remove(item: T): void
  // the unordered version works, but it _could_ be made more
  // efficient in an ordered list by finding the item for
  // removal with binary search
}

export default OrderedList;
