// implement infinite currying in js

function sum(...args) {
  let sum1 = args.reduce((acc, curr) => acc + curr);
  return function (...args) {
    if (args.length === 0) return sum1;
    let sum2 = args.reduce((acc, curr) => acc + curr);
    return sum(sum1 + sum2);
  };
}

// multi arguments
console.log(sum(3, 4, 5)(1)(2)(3)());

// single arguments
console.log(sum(3)(1)(2)(3)());
