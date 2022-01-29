var diagonalSum = function (mat) {
  const size = mat.length;
  let sum = 0;

  // top left to bottom right
  for (let i = 0; i < size; i++) {
    sum += mat[i][i];
  }

  // top right to bottom left
  for (let i = 0; i < size; i++) {
    let j = size - 1 - i;
    sum += mat[i][j];
  }

  // for odd length matrix , subtract the middle from the sum
  if (size % 2 === 1) {
    let mid = size >> 1;
    sum -= mat[mid][mid];
  }
  return sum;
};
