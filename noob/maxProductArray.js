// https://leetcode.com/problems/maximum-product-of-two-elements-in-an-array/

var maxProduct = function (nums) {
  let product = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const pr = (nums[i] - 1) * (nums[j] - 1);
      product = Math.max(product, pr);
    }
  }
  return product;
};

var maxProduct1 = function (nums) {
  let max = 0;
  let secondMax = 0;
  for (let num of nums) {
    if (num > max) {
      secondMax = max;
      max = num;
    } else if (num > secondMax) {
      secondMax = num;
    }
  }

  return (max - 1) * (secondMax - 1);
};

console.log(maxProduct([3, 4, 5, 2]));
console.log(maxProduct1([3, 4, 5, 2]));
