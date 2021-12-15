// Two sum problem in JS
// given an array and a target value, find two values from the array which add upto the target

const arr = [7, 2, 10, 0, 1];

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
