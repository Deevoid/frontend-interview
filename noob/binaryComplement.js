const binaryComplement = (num) => {
  const binary = [...(num >>> 0).toString(2)];
  binary;
  for (let i = 0; i < binary.length; i += 1) {
    binary[i] = binary[i] === "1" ? "0" : "1";
  }
  return parseInt(binary.join(""), 2);
};
console.log(binaryComplement(5));
