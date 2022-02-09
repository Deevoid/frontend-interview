// find common between two string
// flour flower
function findCommon(a, b) {
  let long = [];
  let temp = "";
  for (let i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] == b[i]) {
      temp += a[i];
    } else if (temp) {
      long.push(temp);
      temp = "";
    }
  }
  long;
  let max = 0;
  let index = 0;
  for (let [i, char] of long.entries()) {
    if (char.length > max) {
      max = char.length;
      index = i;
    }
  }
  return long[index];
}

console.log(findCommon("floureply", "flowereply"));
