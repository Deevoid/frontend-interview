// create a custom deffered function same as in jQuery.
// usage
// const d = new Defer()
// d.then(value => console.log("1", value))
// d.then(value => console.log("2", value))
// .then will not output anything until the callee is resolved
// d.resolve("hello")

function defer() {
  let resolvedValue;
  let status = false;
  let thens = [];

  this.resolve = function (val) {
    // when fn is resolved
    // set resolvedValue to val
    resolvedValue = val;
    // set status to true
    status = true;
    thens.forEach((then) => {
      // call each then callback passing them resolvedValue as arguments > update resolvedValue with the return value of each callbacks
      resolvedValue = then(resolvedValue);
    });
  };

  this.then = function (cb) {
    if (status) {
      // if function is resolved then invoke the callback
      cb(resolvedValue);
    } else {
      // else push it to the thens array
      thens.push(cb);
    }
  };
}

const a = new defer();
a.then((a) => {
  console.log("1", a);
  return "one";
});
a.then((a) => {
  console.log("2", a);
  return "two";
});
a.then((a) => {
  console.log("3", a);
  return "three";
});

setTimeout(() => {
  a.resolve("Hello");
}, 4000);

//output
// 1 Hello
// 2 one
// 3 tow
