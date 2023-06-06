class ListNode<T> {
  data: T
  next: ListNode<T> | null = null

  constructor(data: T) {
    this.data = data;
  }
}

class LinkedList<T> {
  rootNode: ListNode<T> = null;

  getListTail(node: ListNode<T>, value = null): ListNode<T> {
    if (!node) return null;

    if (node.next === null) {
      return node;
    }

    if (value && node.data === value) return node;

    return this.getListTail(node.next);
  }

  add(value: T): void {
    const node = new ListNode<T>(value);
    if (this.rootNode === null) this.rootNode = node;
    else if (this.getListTail(this.rootNode, value)){
      this.getListTail(this.rootNode, value).next = node;
    }
  }

  has(value: T): boolean {
    if (this.rootNode === null) return false;

    let currentNode = this.rootNode;

    while (currentNode) {
      if (currentNode.data === value) return true;
      currentNode = currentNode.next;
    }

    return false;
  }
}

class Stack<T>{
  stack: T[] = []

  constructor(arr: T[]) {
    this.stack = [...this.stack, ...arr];
  }

  push(value: T): number {
    this.stack[this.stack.length] = value;
    return this.stack.length;
  }

  pop(): T {
    const element =  this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;
    return element;
  }
}

class Queue<T> {
  queue: T[] = []

  enqueue(value: T): void {
    this.queue[this.queue.length] = value;
  }

  dequeue(): T {
    const element = this.queue[0];
    this.queue = this.queue.filter((value, index) => index !== 0);
    return element;
  }
}

const l = new LinkedList<number>();

l.add(1)
l.add(2)
l.add(3)
console.log(l.rootNode)
