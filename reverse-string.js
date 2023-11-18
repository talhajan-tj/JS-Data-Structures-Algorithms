function reverseString(str) {
  let reversed = "";
  // reversed = str.split("").reverse().join("");
  // return reversed;

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log(reverseString("string is reversed"));
