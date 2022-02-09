// Implement strStr().
// Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
function indexOf(haystack, needle) {
  if (!needle) return 0;

  if (needle.length > haystack.length) {
    return -1;
  }

  let i = 0;
  let j = 0;
  let firstIndex = -1;
  let lastMatch = null;
  let firstMatch = null;
  let firstEl = needle[0];
  while (i < haystack.length && j < needle.length) {
    if (haystack[i] == firstEl) {
      lastMatch = i;
    }
    if (haystack[i] == needle[j]) {
      if (firstIndex == -1) {
        firstIndex = i;
        if (haystack.length - 1 - firstIndex < needle.length - 1) {
          return -1;
        }
      }
      i++;
      j++;
    } else {
      firstIndex = -1;
      if (lastMatch && lastMatch !== firstMatch) {
        i = lastMatch;
        firstMatch = lastMatch;
      } else i++;
      j = 0;
    }
  }

  return firstIndex;
}
let a = indexOf("mississippi", "issippi");
console.log(a);

// console.log("mississippi".indexOf("issip"));
