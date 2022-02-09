function single(num) {
  while (num > 9) {
    let sum = 0;
    while (num) {
      let rem = num % 10;
      sum += rem;
      num = (num / 10) | 0;
    }
    num = sum;
  }

  return num;
}

console.log(single(38));
