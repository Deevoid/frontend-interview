// helper function to reverse an array
function reverse(arr, start, end) {
  let j = end;
  for (let i = start; i <= start + (end - start) / 2; i++) {
    // swap
    [arr[i], arr[j]] = [arr[j], arr[i]];
    j--;
  }
  return arr;
}
const arr = [0, 1, 2, 3, 4, 5, 6, 7];
// find net rotation (remainder when divided by array length)
const k = 3 % arr.length;
reverse(arr, 0, arr.length - 1);
reverse(arr, 0, k - 1);
reverse(arr, k, arr.length - 1);

console.log(arr);
