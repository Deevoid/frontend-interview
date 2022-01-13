// create a custom promis from scratch

function CustomPromise(cb) {
  let state = "pending";
  let resolvedValue = "";
  let thenCallbacks = [];
  let catchCallbacks = [];

  resolve = function (value) {
    state = "resolved";
    resolvedValue = value;
    thenCallbacks.forEach((thenCallback) => {
      resolvedValue = thenCallback(resolvedValue);
    });
  };

  reject = function (value) {
    state = "rejected";
    resolvedValue = value;
    catchCallbacks.forEach((catchCallback) => {
      resolvedValue = catchCallback(resolvedValue);
    });
  };

  cb(resolve, reject);

  this.then = function (func) {
    thenCallbacks.push(func.bind(this));
    return this;
  };

  this.catch = function (func) {
    catchCallbacks.push(func);
    return this;
  };
}

const usePromise = new CustomPromise((resolve, reject) => {
  setTimeout(() => {
    console.log("object");
    resolve("resolved");
  }, 3000);
});
console.log(usePromise);

usePromise
  .then(() => console.log("1"))
  .then(() => console.log("2"))
  .catch(() => console.log("catch"));
