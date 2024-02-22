function validAnagrams(str1, str2) {
  const strCount1 = str1.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  const strCount2 = str2.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(strCount1).every(
    (char) => strCount1[char] === strCount2[char]
  );
}

console.log(validAnagrams("app", "ppa"));
