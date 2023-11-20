function palindrome(str) {
  const formateStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = formateStr.split("").reverse().join("");
  return formateStr === reversedStr;
}

console.log(palindrome("maDam"));
