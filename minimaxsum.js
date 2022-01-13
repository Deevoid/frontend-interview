function minimaxsum() {
  const arr = [1, 3, 5, 7, 9];
  let sum = 0;
  let min = arr[0];
  let max = arr[0];
  arr.forEach((item) => {
    sum += item;
    min = Math.min(min, item);
    max = Math.max(max, item);
  });
  return [sum - max, sum - min];
}

console.log(minimaxsum());
