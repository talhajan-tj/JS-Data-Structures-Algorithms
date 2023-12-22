//By TJ

// function arrayIntersection(arr1, arr2) {
//   let newArray = [];
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         newArray.push(arr2[j]);
//       }
//     }
//   }
//   return newArray;
// }

// console.log(arrayIntersection([1, 3, 5, "abc"], ["abc", 2, 3, 7, 11, 1]));

// Another mEthod -> Brad

function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1);
  let intersectArray = [];
  for (let num of arr2)
    if (set1.has(num)) {
      intersectArray.push(num);
    }
  return intersectArray;
}
console.log(arrayIntersection([1, 3, 5, "abc"], ["abc", 2, 3, 7, 11, 1]));
