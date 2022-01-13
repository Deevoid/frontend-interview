function filter(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  let j = 1;
  while (j < arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      j++;
      arr[i] = arr[j];
    } else {
      j++;
    }
  }
  return arr;
}

console.log(filter([1, 2, 2, 6, 6, 6, 8, 8]));
