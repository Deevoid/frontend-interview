var kidsWithCandies = function (candies, extraCandies) {
  const max = Math.max(...candies);
  candies;
  max;
  extraCandies;
  return candies.map((candy) => {
    if (candy + extraCandies >= max) {
      return true;
    } else {
      return false;
    }
  });
};

console.log(kidsWithCandies([2, 3, 5, 1, 3], 3));
