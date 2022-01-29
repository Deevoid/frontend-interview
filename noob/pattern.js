function pattern() {
  console.clear();
  const n = 6;
  let string = "";
  for (let i = 1; i <= n; i++) {
    // printing spaces
    for (let j = 1; j <= n - i; j++) {
      string += " ";
    }
    // printing star
    for (let k = 1; k <= i; k++) {
      string += "*";
    }
    string += "\n";
  }
  console.log(string);
}

pattern();
//   *
//  **
// ***
