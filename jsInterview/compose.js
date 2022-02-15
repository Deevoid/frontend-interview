// mimic a compose function in js

function add(a) {
  return a * 2;
}

function subtract(a) {
  return a - 10;
}

function compose(...args) {
  let value;
  return function (arg) {
    args.forEach((func) => {
      value = func(value || arg);
    });

    // for reverse
    // for (let i = args.length - 1; i >= 0; i--) {
    //   value = args[i](value || arg);
    // }
    return value;
  };
}

const evaluate = compose(add, subtract);

console.log(evaluate(5));
