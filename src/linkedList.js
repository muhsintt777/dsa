class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  getNext() {
    return this.next;
  }

  updateNext(node) {
    this.next = node;
  }

  removeNext() {
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }

  getSize() {
    return this.size;
  }

  updateHead(node) {
    this.head = node;
  }

  updateTail(node) {
    this.tail = node;
  }

  updateSize() {
    this.size++;
  }

  isEmpty() {
    return this.size === 0;
  }

  addToEnd(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.updateHead(node);
      this.updateTail(node);
      this.updateSize();
    } else {
      const tail = this.getTail();
      tail.updateNext(node);
      this.updateTail(node);
      this.updateSize();
    }
  }

  addToStart(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.updateHead(node);
      this.updateTail(node);
      this.updateSize();
    } else {
      const headNode = this.getHead();
      node.updateNext(headNode);
      this.updateHead(node);
      this.updateSize();
    }
  }

  print() {
    let values = "";
    if (this.isEmpty()) {
      values = "empty";
    } else {
      let curr = this.getHead();
      while (curr) {
        values += JSON.stringify(curr.getValue()) + " ";
        curr = curr.getNext();
      }
    }
    return values;
  }
}

export default () => {
  const list = new LinkedList();
  list.addToEnd(3);
  list.addToEnd(23);
  list.addToEnd(33);
  list.addToEnd(333);
  list.addToStart(8);
  list.addToStart(9);
  console.log(list.print());
};
