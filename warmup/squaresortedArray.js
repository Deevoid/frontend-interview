// 977. Squares of a Sorted Array

const arr = [-4, -1, 0, 1, 2];

function sortedSquare(arr) {
  let i = 0;
  let j = arr.length - 1;
  let temp = Array.from({ length: arr.length });
  let pointer = arr.length - 1;
  while (i <= j) {
    if (Math.abs(arr[i]) > Math.abs(arr[j])) {
      temp[pointer--] = arr[i] * arr[i];
      i += 1;
    } else {
      temp[pointer--] = arr[j] * arr[j];
      j -= 1;
    }
  }
  return temp;
}

console.log(sortedSquare(arr));
