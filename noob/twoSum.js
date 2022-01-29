// Two sum problem in JS
// given an array and a target value, find two values from the array which add upto the target

const arr = [2, 7, 11, 15];

function twoSum(arr, target) {
  const map = new Map();
  for (let i = 0; i < arr.length; i += 1) {
    const complement = target - arr[i];
    if (map.has(complement)) {
      return [map.get(complement), arr[i]];
    }
    map.set(arr[i], arr[i]);
  }
}

console.log(twoSum(arr, 9));

// for sorted array
const arr1 = [2, 7, 11, 15];
function sortedTwoSum(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [left, right];
    } else if (sum > target) {
      right--;
    } else left++;
  }
  return [-1, -1];
}
console.log(sortedTwoSum(arr, 9));
