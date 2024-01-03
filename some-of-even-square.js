function someOfEvenSquare(nums) {
  const total = nums
    .filter((num) => num % 2 === 0)
    .map((num) => num ** 2)
    .reduce((sum, square) => sum + square, 0);
  return total;
}

console.log(someOfEvenSquare([1, 2, 3, 4, 5]));
