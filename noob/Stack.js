function Stack(...args) {
  // LIFO Last in First out
  const arr = args;

  this.size = function () {
    return arr.length;
  };

  this.peek = function () {
    return arr[arr.length - 1];
  };

  this.push = function (value) {
    arr.push(value);
  };

  this.pop = function () {
    arr.pop();
  };
}

const stack = new Stack(1, 2, 3);

console.log(stack.size()); // 3
console.log(stack.push(4)); // [1,2,3,4]
console.log(stack.peek()); // 4
console.log(stack.pop()); // [1,2,3]
console.log(stack.peek()); // 3
