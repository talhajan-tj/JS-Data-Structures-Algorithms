function highScoringWord(str) {
  const wordArray = str.split(" ");
  const charCodeArray = wordArray.map((word) => {
    // let score = 0;
    // for (const letter of word) {
    //   score += letter.charCodeAt(0) - 96;
    // }
    // return score;

    return Array.from(word).reduce(
      (score, letter) => score + letter.charCodeAt(0) - 96,
      0
    );
  });

  //   let higestScore = 0;
  //   let higestIndex = 0;

  //   for (let i = 0; i < charCodeArray.length; i++) {
  //     if (charCodeArray[i] > higestScore) {
  //       higestScore = charCodeArray[i];
  //       higestIndex = i;
  //     }
  //   }
  const higestScore = Math.max(...charCodeArray);
  const higestIndex = charCodeArray.indexOf(higestScore);
  return wordArray[higestIndex];
}

console.log(highScoringWord("development is the better way express"));
