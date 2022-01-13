function debounce(func, wait, immediate = false) {
  let timeout;

  return function () {
    clearTimeout(timeout);

    const callNow = immediate && !timeout;

    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        func.apply(this, arguments);
      }
    }, wait);

    if (callNow) func.apply(this, arguments);
  };
}

function move() {
  console.log("object");
}

const cl = debounce(move, 1000);
cl();
cl();
cl();
cl();
cl();
cl();
cl();
