// 27. Remove Element

function remove(nums, val) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[j] = nums[i];
      j++;
    }
  }
  return { nums, j };
}
const arr = [3, 2, 2, 3];
console.log(remove(arr, 3));
