// sorted array

// duplicate array return first index (leftmost)
const arr = [1, 2, 3, 3, 4, 4, 5, 6];
const arr1 = [1, 2, 3, 4, 5, 6];

function binarySearch(arr, item) {
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

console.log(binarySearch(arr, 3));
console.log(binarySearch(arr1, 3));
