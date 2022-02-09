// find difference between two strings

var findTheDifference = function (s, t) {
  // using map
  //     const map = new Map()
  //     for(let char of s) {
  //         if(map.has(char)) {
  //            map.set(char,map.get(char)+1)
  //         } else {
  //            map.set(char, 1)
  //         }
  //     }

  //     for(let char of t) {
  //         if(!map.has(char)){
  //             return char
  //         } else if(map.get(char)==0) {
  //             return char
  //         } else {
  //             map.set(char, map.get(char)-1)
  //         }
  //     }

  // using XOR
  // let a = t.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), 0);
  // let b = s.split("").reduce((acc, curr) => acc ^ curr.charCodeAt(0), 0);
  // return String.fromCharCode(a ^ b);

  // using diff/sum
  let diff = 0;
  for (let i = 0; i < s.length; i++) {
    // subtract from s
    diff -= s[i].charCodeAt(0);

    // then add from t for same index
    diff += t[i].charCodeAt(0);
  }
  diff += t[t.length - 1].charCodeAt(0);
  return String.fromCharCode(diff);
};

console.log(findTheDifference("abc", "abcd"));
