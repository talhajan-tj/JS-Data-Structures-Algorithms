function maxNum(num) {
  let maxNumber = num[0];
  for (let i = 0; i < num.length; i++) {
    if (num[i] >= maxNumber) {
      maxNumber = num[i];
    }
  }
  return maxNumber;
}

console.log(maxNum([2, 0, 8, 11, 10, 21, 1]));
