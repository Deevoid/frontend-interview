//reverse string arr in place
var reverseString = function (s) {
  let mid = s.length >> 1;
  // js strings are immutable

  // creating array from string
  s = s.split("");
  let arrayresult;

  // creating new string
  let res = "";

  for (let i = s.length - 1; i >= 0; i--) {
    res += s[i];
  }

  // traversing only half the array
  for (let i = 0; i < mid; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  arrayresult = s.join("");
  return { arrayresult, res };
};

console.log(reverseString("abcd"));
