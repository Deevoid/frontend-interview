function anagram(s, t) {
  if (s.length !== t.length) return false;
  const first = s.split("");
  for (let char of t) {
    if (first.indexOf(char) === -1) return false;
    first.splice(first.indexOf(char), 1);
  }
  return first.length === 0;
}

console.log(anagram("nagaram", "anagram"));
