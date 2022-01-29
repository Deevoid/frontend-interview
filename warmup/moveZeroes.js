// move 0 to right side of array
const arr = [0, 1, 0, 3, 4, 0, 5];

// algo
// create a zero pointer
// loop the array
// put i in zero pointer only once
// when digit , then swap digit at zero pointer and increment zero pointer

function move(arr) {
  let zeroCount = -1;
  for (let i = 0; i < arr.length; i++) {
    // swap if zeroCounter exist and digit is not zero
    if (arr[i] !== 0 && zeroCount !== -1) {
      let temp = arr[i];
      arr[i] = arr[zeroCount];
      arr[zeroCount] = temp;
      zeroCount++;
    }
    // change zeroCounter only once for the first zero
    if (arr[i] == 0 && zeroCount == -1) {
      zeroCount = i;
    }
  }
  return arr;
}

Array.prototype.shiftZero = function () {
  return move(this);
};

console.log(arr.shiftZero());

// naive approach
function moveZero(arr) {
  let temp = [];
  for (let char of arr) {
    if (char !== 0) {
      temp.push(char);
    }
  }
  let zeroesLeft = arr.length - temp.length;
  return [...temp, ...Array.from({ length: zeroesLeft }).map(() => 0)];
}
console.log(moveZero(arr));
