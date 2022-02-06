// implement memoize in js

function memoize(func) {
  // using context of outer function so that we can bind any context provided to us
  let ctx = this;
  let cache = new Map();
  return function () {
    let args = arguments;
    let key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }

    // apply takes iterator as args
    let value = func.apply(ctx, args);
    cache.set(key, value);
    return value;
  };
}

const user = {
  name: "dev",
};

function sum(a, b) {
  console.log(this.name);
  return a + b;
}

// use call to bind different context to memoize fn and pass "func" as an argument
const memoSum = memoize.call(user, sum);
console.log(memoSum(4, 5));
