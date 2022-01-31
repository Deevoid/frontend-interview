var reverse = function (x) {
  let number = 0;
  let negative = number < 0 ? -1 : 1;
  let temp = x;
  temp = Math.abs(temp);
  while (temp) {
    // get the last digit from x(remainder)
    let remainder = temp % 10;

    // add remainder in result
    number = number * 10 + remainder;

    // remove last digit from x
    temp = Math.floor(temp / 10);
  }
  if (x > 2 ** 31) return 0;
  return number * negative;
};

// console.log(reverse(-2147483648));
console.log(reverse(-123));
// console.log(2 ** 31);
