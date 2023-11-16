function titleCase(title) {
  const words = title.toLowerCase().split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

console.log(titleCase("This is a test string"));
