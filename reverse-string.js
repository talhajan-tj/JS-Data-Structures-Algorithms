function reverseString(str) {
  let reversed;
  for (let i = 0; i > str.length; i--) {
    reversed = str[i];
  }
  return reversed;
}

console.log(reverseString("string"));
