const arr = [1, 2, 3, 3, 3, 4, 4, 5, 5, 2];

// using set
const res = [...new Set(arr)];
console.log(res);

// using indexof
const res1 = arr.filter((item, index) => arr.indexOf(item) === index);
console.log(res1);

// using map
const map = new Map();
arr.forEach((item) => {
  if (!map.has(item)) {
    map.set(item, item);
  }
});
console.log([...map.keys()]);

// inplace for sorted array only
function removeDuplicates(arr) {
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    // two pointer
    // j will point to sorted index only
    if (arr[i] != arr[i + 1]) {
      arr[j] = arr[i];
      j++;
    }
  }
  console.log(arr);
}
var arr1 = [1, 1, 2, 2, 3, 4, 4, 4, 5, 5];
removeDuplicates(arr1);

// maintain only two
function removeDuplicatesTwice(arr) {
  let j = 1;
  let count = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] == arr[i - 1]) {
      count++;
      if (count < 3) {
        arr[j] = arr[i];
        j++;
      }
    } else {
      arr[j] = arr[i];
      count = 1;
      j++;
    }
  }
  console.log(arr);
}
var arr1 = [1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5];
removeDuplicatesTwice(arr1);
