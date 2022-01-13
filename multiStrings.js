// input = "3[a]2[bc]"
// output = 'aaabcbc'

function flatString(str) {
  let multiply = [];
  let tempMult = "";
  let repeatString = [];
  let answer = "";

  for (char of str) {
    if (!isNaN(char)) {
      tempMult = `${tempMult}${char}`;
    } else if (char === "[") {
      multiply.push(tempMult);
      tempMult = "";
      repeatString.push(answer);
      answer = "";
    } else if (char === "]") {
      answer = repeatString.pop() + answer.repeat(multiply.pop());
    } else {
      answer += char;
    }
  }
  return answer;
}

[strasdfasf];

const arr = "ab2[bc2[ef]]";
console.log(flatString(arr));
