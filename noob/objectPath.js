const obj = {
  a: {
    b: {
      c: 25,
    },
  },
};

// [a]
// a.b.c // 25
// a.d.c // undefined
// a.b.d // undefined

function test(obj, string) {
  const steps = string.split(".");
  let result = obj;
  for (let step of steps) {
    if (result && result[step]) {
      result = result[step];
    } else {
      return undefined;
    }
  }
  return result;
}

// a.b.c
function test2(obj, string) {
  if (!string) return undefined;
  if (string.length === 1) {
    return obj[string];
  }
  const step = string[0];
  if (step === ".") {
    return test2(obj, string.substring(1));
  } else {
    const value = obj[step];
    if (value) {
      return test2(value, string.substring(1));
    }
  }
}

console.log(test2(obj, "a.b.c"));
console.log(test2(obj, "a.d.c"));
// console.log(test(obj, "a.b.d"));
