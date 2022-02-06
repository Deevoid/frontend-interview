// find key in infinite sorted Array

// find first occurence in infinite  sorted array
function infinity(arr, target) {
  let start = 0;
  let end = 1;
  let res = -1;
  while (arr[end] < target) {
    start = end + 1;
    end = end * 2;
  }

  // apply binary search
  while (start <= end) {
    let mid = (start + end) >> 1;
    let value = arr[mid];
    if (value === target) {
      res = mid;
      end = mid - 1;
    } else if (value > target) {
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }

  return res;
}

var arr1 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];
console.log(infinity(arr1, 4));
