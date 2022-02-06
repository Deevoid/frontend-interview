function maxFrequency(arr) {
  let maxF = 1;
  let count = 1;
  let result = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      count++;
      if (count > maxF) {
        maxF = count;
        result = arr[i];
      }
    } else {
      count = 1;
    }
  }
  return { result, maxF };
}

const arr = [1, 1, 1, 2, 2, 2, 3, 3];
console.log(maxFrequency(arr));
