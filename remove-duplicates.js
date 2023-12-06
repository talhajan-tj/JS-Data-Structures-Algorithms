function removeDuplication(array) {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
  }
  return newArray;
}

console.log(
  removeDuplication([
    1,
    2,
    "Talha",
    true,
    false,
    "Talha",
    "Jan",
    2,
    true,
    true,
    3,
    3,
    "Talha",
  ])
);
