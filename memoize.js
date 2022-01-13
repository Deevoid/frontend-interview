// bind > change function context(this) and should be invoked in future
// call > calls the function immediately with the supplied context and takes one argument at a time
// apply > call the functio immediately with the context and takes arguments in an array form (multiple arguments)

function memoize(func) {
  const cache = new Map();
  this.ok = "ok";
  let ctx = this;
  return function () {
    this.inner = "inner";
    const key = JSON.stringify(arguments);
    if (cache.has(key)) {
      return cache.get(key);
    }
    console.log(this);
    console.log(ctx);
    const value = func.apply(ctx, arguments);
    cache.set(key, value);
    return value;
  };
}

function delay(name) {
  setTimeout(() => {
    console.log(name);
  }, 3000);
}

const memoDelay = memoize(delay);

async function one() {
  console.log(performance.now());
  memoDelay("dev");
  console.log(performance.now());
}

async function two() {
  console.log(performance.now());
  memoDelay("dev");
  console.log(performance.now());
}

one();
two();
