class dlNode {
    constructor(data, next = null, prev = null) {
      this.data = data;
      this.next = next;
      this.prev = prev;
    }
  }
  
  class dlList {
    constructor() {
      this.head = null;
      this.tail = null;
    }
  }
  // Print all values in the list
  // time O(n) | space O(1)
  dlList.prototype.pretty = function () {
    if (!this.head) return '[]';
    let r = this.head;
    let res = '[';
    while (r) {
      r.next ? (res += `${r.data}, `) : (res += `${r.data}]`);
      r = r.next;
    }
    return res;
  };
  // Add a new node to the end of the list
  // time O(1) | space O(1)
  dlList.prototype.push = function (data) {
    let newNode = new dlNode(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      return this;
    }
    this.tail.next = newNode;
    newNode.prev = this.tail;
    this.tail = newNode;
    return this;
  };
  
  // Removes and returns the last node from the list.
  // time O(1) | space O(1)
  dlList.prototype.pop = function () {
    if (this.head === this.tail) {
      this.tail = null;
      this.head = null;
      return this;
    }
    let removedNode = this.tail;
    this.tail = this.tail.prev;
    this.tail.next = null;
    return removedNode.data;
  };
  
  // Add a new node to the front of the list
  // time O(1) | space O(1)
  dlList.prototype.shift = function (data) {
    let n = new dlNode(data);
    n.next = this.head;
    this.head = n;
    return this;
  };
  
  // Removes and returns the first node in the list
  // time O(1) | space O(1)
  dlList.prototype.unshift = function () {
    let removedNode = this.head;
    this.head = removedNode.next;
    this.head.prev = null;
    return removedNode;
  };
  
  // Returns the length of the list. How many nodes are in the list.
  // time O(n) | space O(1)
  dlList.prototype.getlength = function () {
    let r = this.head;
    let count = 0;
    while (r) {
      count++;
      r = r.next;
    }
    return count;
  };
  
  //insert Node at given index
  // time O(n) | space O(1)
  dlList.prototype.insertAt = function (data, index) {
    if (!this.head) return '[]';
    if (this.getlength() < index) return `reference error: position ${index}`;
    if (index === 1) return this.shift(data);
    if (index === this.getlength()) return this.push(data);
  
    let newNode = new dlNode(data);
    let curr = this.head;
    let count = 1;
    while (count < index) {
      curr = curr.next;
      count++;
    }
  
    let prev = curr.prev;
    prev.next = newNode;
    newNode.prev = prev;
    newNode.next = curr;
    curr.prev = newNode;
    return this;
  };
  
  // reverse the order of the values in the list
  // time O(n) | space O(1)
  dlList.prototype.reverse = function () {
    if (!this.head) return '[]';
    let curr = this.head;
    let prev = null;
  
    while (curr) {
      let runner = curr.next;
  
      curr.next = prev;
      curr.prev = runner;
      prev = curr;
      curr = runner;
    }
    this.tail = this.head;
    this.head = prev;
    return this;
  };
  
  //removeVal
  // time O(n) | space O(1)
  dlList.prototype.removeVal = function (data) {
    if (!this.head) return '[]';
    if (this.head.data === data) return this.unshift();
    if (this.tail.data === data) return this.pop();
  
    let r = this.head;
    while (r.data !== data) {
      r = r.next;
    }
    r.prev.next = r.next;
    r.next.prev = r.prev;
    return this;
  };
  //removeAt
  // time O(n) | space O(1)
  dlList.prototype.removeAt = function (index) {
    if (!this.head) return '[]';
    if (index === 1) return this.unshift();
    if (index === this.getlength()) return this.pop();
    if (index > this.getlength())
      return `reference error: at position [${index}]`;
    let count = 1;
    let r = this.head;
    while (count < index) {
      r = r.next;
      count++;
    }
    r.prev.next = r.next;
    r.next.prev = r.prev;
    return this;
  };
  
  dlList.prototype.addMany = function (values) {
    for (const v of values) {
      this.push(v);
    }
    return this;
  };
  //splice
  //isloop
  
  module.exports = dlList;
  