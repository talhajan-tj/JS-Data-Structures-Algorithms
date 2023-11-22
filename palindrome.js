// function palindrome(str) {
//   const formateStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
//   const reversedStr = formateStr.split("").reverse().join("");
//   return formateStr === reversedStr;
// }

function isPalindrome(str) {
  const formatedString = removeNonAlphaNumeric(str.toLowerCase());
  const reversedString = reverseString(formatedString);
  return formatedString === reversedString;
}
function removeNonAlphaNumeric(str) {
  let formatedString = "";
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (isAlphaNumeric(char)) {
      formatedString += char;
    }
  }
  return formatedString;
}
function isAlphaNumeric(char) {
  const code = char.charCodeAt(0);

  return (code >= 48 && code <= 57) || (code >= 97 && code <= 122);
}
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
console.log(isPalindrome("maDa@m"));
