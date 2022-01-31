// https://leetcode.com/problems/missing-number/
function missingNumber(arr) {
  // find sum of all number in range 0 to n using
  // formula sum = n(n+1) / 2
  const totalSum = (arr.length * (arr.length + 1)) / 2;
  const sum = arr.reduce((acc, curr) => acc + curr);
  return totalSum - sum;
}

const arr = [1, 2, 2];
let single;
for (let num of arr) {
  single ^= num;
  single;
}
