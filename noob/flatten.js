// given an array of array , flatten it

function flatten(arr) {
  // solution using forEach
  const flat = [];
  arr.forEach((item) => {
    Array.isArray(item) ? flat.push(...flatten(item)) : flat.push(item);
  });
  return flat;

  // solution using Reduce
  return arr.reduce((acc, curr) => {
    if (Array.isArray(curr)) {
      return [...acc, ...flatten(curr)];
    } else {
      return [...acc, curr];
    }
  }, []);
}
Array.prototype.flatten = function () {
  // here "this" will refer to the arr which calls the flatten prototype
  return flatten(this);
};

const arr = [1, [1, [1, [1]]]];
console.log(arr.flatten());
