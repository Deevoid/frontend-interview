const arr = [4, 4, 4, 3, 3, 3, 3, 3, 3, 1, 1, 1, 2, 2, 2];

function binary(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  let result;
  while (start <= end) {
    let mid = (start + end) >> 1;
    if (arr[mid] == item) {
      result = mid;
      // for duplicate values we have to find the left most occurence
      // thus go left from here
      end = mid - 1;
    } else if (arr[mid] < item) {
      start = mid + 1;
    } else end = mid - 1;
  }
  return result;
}

console.log(binary(arr, 4));
