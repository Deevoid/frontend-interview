// find max frequent item (boyer moore algo)
// condition: Majority should occur more that length/2
const arr = [1, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4];

function find(arr) {
  let majority;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (count === 0) {
      majority = arr[i];
      count++;
    } else if (arr[i] === majority) {
      count++;
    } else count--;
  }
  return { majority, count };
}

console.log(find(arr));
