function Queue(...args) {
  /// FIFO First in First Out
  const arr = args;

  // Functions to be implemented
  // enqueue(item) // push item in queue
  // dequeue() // remove item from queue(first item)
  // front()
  // isEmpty()
  // printQueue()

  this.enqueue = function (value) {
    arr.push(value); // [1,2,"3"]
  };

  this.dequeue = function (value) {
    arr.shift();
  };

  this.front = function () {
    return arr[0];
  };

  this.printQueue = function () {
    return arr.reverse().join(">");
  };
}

const q = new Queue();
console.log(q.enqueue(1));
console.log(q.enqueue(2));
console.log(q.enqueue(3));
console.log(q.dequeue());
console.log(q.enqueue(4));
console.log(q.front());
console.log(q.printQueue());
