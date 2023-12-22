function missinNumber(arr) {
  if (arr.length === 0) {
    return 1;
  }
  const n = arr.length + 1;
  const expectedSum = (n * (n + 1)) / 2;

  let totalSum = 0;
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }
  return expectedSum - totalSum;
}

console.log(missinNumber([1, 2, 3, 4, 7, 6, 5, 8, 10]));
