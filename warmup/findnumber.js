// find the first and last occurence of a number in sorted array
const arr = [2, 2, 2, 2, 3, 4, 5];

function linearFind(arr, item) {
  let a, b;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == item) {
      if (a === undefined) {
        a = i;
      } else {
        b = i;
      }
    }
  }
  return [a, b];
}

function findBinary(arr, item) {
  function binarySearch(arr, start, end, target, directionLeft) {
    let result;
    while (start <= end) {
      let mid = (start + end) >> 1;
      if (arr[mid] === target) {
        result = mid;
        // if finding leftmost index then set end to mid-1
        if (directionLeft) {
          end = mid - 1;
        }
        // elif finding rightmost index then set start to mid+1
        else start = mid + 1;
      } else if (arr[mid] > target) {
        end = mid - 1;
      } else start = mid + 1;
    }
    return result;
  }

  const left = binarySearch(arr, 0, arr.length - 1, item, true);
  const right = binarySearch(arr, 0, arr.length - 1, item, false);

  return [left, right];
}

console.log(findBinary(arr, 2));
console.log(linearFind(arr, 2));
