//reverse string arr in place
var reverseString = function (s) {
  let mid = s.length >> 1;
  for (let i = 0; i < mid; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};

var reverseString = function (s) {
  let mid = s.length >> 1;
  for (let i = 0; i < mid; i++) {
    let temp = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = temp;
  }
  return s;
};
