var reverse = function (x) {
  let number = 0;
  let negative = number < 0 ? -1 : 1;
  let temp = x;
  temp = Math.abs(temp);
  while (temp) {
    let remainder = temp % 10;
    number = number * 10 + remainder;
    temp = (temp / 10) | 0;
  }
  console.log(number);
  if (x > 2 ** 31) return 0;
  return number * negative;
};

console.log(reverse(-2147483648));
// console.log(2 ** 31);
