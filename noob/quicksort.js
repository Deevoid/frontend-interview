// recursive
const quickSortRecursive = (arr) => {
  if (arr.length < 2) return arr;
  const pivot = arr[0];
  const left = [];
  const right = [];

  for (const item of arr) {
    if (item > pivot) {
      right.push(item);
    } else if (item < pivot) {
      left.push(item);
    }
  }

  return [...quickSortRecursive(left), pivot, ...quickSortRecursive(right)];
};

console.log(quickSortRecursive([1, 5, 9, 2, 8, 7, 4]));
