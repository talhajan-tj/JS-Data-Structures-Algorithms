function countVowels(str) {
  let count = 0;
  const lowerStr = str.toLowerCase();
  for (let i = 0; i < lowerStr.length; i++) {
    if (
      lowerStr[i] === "a" ||
      lowerStr[i] === "e" ||
      lowerStr[i] === "i" ||
      lowerStr[i] === "o" ||
      lowerStr[i] === "u"
    ) {
      count++;
    }
  }
  return count;
}

console.log(countVowels("thereisalotofvowelswordshere"));
