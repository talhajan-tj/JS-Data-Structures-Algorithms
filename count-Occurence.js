function occurence(str, val) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == val) {
      count++;
    }
  }
  return count;
}

console.log(occurence("talhajAn", "a"));

// with split()
const occurenceSplit = (str, val) => str.split(val).length - 1;

console.log(occurenceSplit("this is a test project", "t"));
