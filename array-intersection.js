function arrayIntersection(arr1, arr2) {
  let newArray = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        newArray.push(arr2[j]);
      }
    }
  }
  return newArray;
}

console.log(arrayIntersection([1, 3, 5, "abc"], ["abc", 2, 3, 7, 11, 1]));
