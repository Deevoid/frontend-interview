// Given a sorted array of distinct integers and a target value, return the index if the target is found.
// If not, return the index where it would be if it were inserted in order.

var searchInsert = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let midValue;
  while (start <= end) {
    let mid = (start + end) >> 1;
    midValue = nums[mid];
    if (midValue === target) return mid;
    if (midValue > target) end = mid - 1;
    if (midValue < target) start = mid + 1;
  }

  // return start as it will indicate at which position the target could be inserted
  return start;
};

const arr = [1, 3, 5, 6];
console.log(searchInsert(arr, 2));
