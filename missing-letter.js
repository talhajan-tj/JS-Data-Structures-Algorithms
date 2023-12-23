// With IndexOf
function missingLetter(arr) {
  const alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const startIndex = alphabet.indexOf(arr[0]);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== alphabet[startIndex + i]) {
      return alphabet[startIndex + i];
    }
  }
  return "";
}
console.log(missingLetter(["u", "v", "w", "x", "z"]));

// With CharCode value
function missingLetter2(arr) {
  let start = arr[0].charCodeAt(0);

  for (let i = 0; i < arr.length; i++) {
    const current = arr[i].charCodeAt(0);
    console.log(current, current - start);
    if (current - start > 1) {
        console.log('return');
      return String.fromCharCode(start + 1);
    }
    start = current;
  }
  return "";
}
console.log(missingLetter2(["u", "v", "w", "x", "z"]));
