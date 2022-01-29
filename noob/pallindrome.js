function pallindrome(string) {
  let first = 0;
  let last = string.length - 1;
  while (first < last) {
    if (string[first++] !== string[last--]) {
      return false;
    }
  }
  return true;
}

console.log(pallindrome("ABLE WAS I ERE I SAW ELBA"));
console.log(pallindrome("racecar"));
console.log(pallindrome("12344321"));
console.log(pallindrome("123443212"));
