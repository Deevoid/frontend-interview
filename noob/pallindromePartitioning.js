const isPalindrome = (start, first, last) => {
  while (first < last - 1) {
    if (start[first] !== start[last - 1]) {
      return false;
    }
    ++first;
    --last;
  }
  return true;
};

const partition = function (s) {
  const result = [];
  const path = [];

  const helper = (s, i, j) => {
    if (i === s.length) {
      result.push([...path]);
      return;
    }

    for (let index = j; index <= s.length; ++index) {
      if (isPalindrome(s, i, index)) {
        path.push(s.slice(i, index));
        helper(s, index, index + 1);
        path.pop();
      }
    }
  };

  helper(s, 0, 1);
  return result;
};

console.log(partition("aab"));
