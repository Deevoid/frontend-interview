const string1 = "[{()}]";
const string2 = "(((([[[{{{3}}}]]]]))))"; // extra ]

function validBracketPair(string) {
  const map = new Map([
    ["]", "["],
    ["}", "{"],
    [")", "("],
  ]);

  const stack = [];
  for (let char of string) {
    if (!map.has(char)) {
      stack.push(char);
    } else if (stack.pop() !== map.get(char)) {
      return false;
    }
  }
  return stack.length === 0;
}

function validBracketPairV2(string) {
  const map = new Map([
    ["[", "]"],
    ["{", "}"],
    ["(", ")"],
  ]);

  const stack = [];
  for (let char of string) {
    if (map.has(char)) {
      stack.push(map.get(char));
    } else if (stack.pop() !== char) {
      return false;
    }
  }
  return stack.length === 0;
}

function validBracketPairV3(string) {
  const arr = ["{", "[", "("];

  const stack = [];
  for (let char of string) {
    if (arr.includes(char)) {
      stack.push(char);
    } else if (
      (char === ")" && stack.pop() !== "(") ||
      (char === "}" && stack.pop() !== "{") ||
      (char === "]" && stack.pop() !== "[")
    ) {
      return false;
    }
  }
  return stack.length === 0;
}

console.log(validBracketPair(string1));
console.log(validBracketPair(string2));

//v2
console.log(validBracketPairV2(string1));
console.log(validBracketPairV2(string2));

//v3
console.log(validBracketPairV2(string1));
console.log(validBracketPairV2(string2));
