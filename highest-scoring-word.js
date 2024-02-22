function higestScoreWord(str) {
  const strArray = str.split(" ");

  const charCodeArray = strArray.map((word) => {
    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });
  const higestScore = Math.max(...charCodeArray);
  const higestIndex = charCodeArray.indexOf(higestScore);
  return strArray[higestIndex];
}

console.log(higestScoreWord("he is a termendous taxi driver"));
