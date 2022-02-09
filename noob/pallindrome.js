function pallindrome(string) {
  // let first = 0;
  // let last = string.length - 1;
  // while (first < last) {
  //   if (string[first++] !== string[last--]) {
  //     return false;
  //   }
  // }
  // return true;

  // using for loop (till mid index only)
  // let mid = string.length >> 1;
  // let len = string.length;
  // for (let i = 0; i < mid; i++) {
  //   if (string[i] !== string[len - 1 - i]) {
  //     return false;
  //   }
  // }
  // return true;

  // for integers (not string)

  // all negative are non-pallindrom
  if (string < 0) return false;
  let sum = 0;
  let copy = string;
  while (copy) {
    let rem = copy % 10;
    sum = sum * 10 + rem;
    copy = (copy / 10) | 0;
  }
  return sum == string;
}

// console.log(pallindrome("ABLE WAS I ERE I SAW ELBA"));
// console.log(pallindrome("racecar"));
// console.log(pallindrome("12344321"));
// console.log(pallindrome("123443212"));
// console.log(pallindrome("10"));
console.log(pallindrome(121));
