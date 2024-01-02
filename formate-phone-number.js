// Way 1
// function formateNumber(num) {
//   const areaCode = num.slice(0, 3).join("");
//   const prefix = num.slice(3, 6).join("");
//   const lineNum = num.slice(6).join("");

//   return `(${areaCode}) ${prefix}-${lineNum}`;
// }

// Way 2

const formateNumber = (num) =>
  `(${num.slice(0, 3).join("")}) ${num.slice(3, 6).join("")}-${num
    .slice(6)
    .join("")}`;

console.log(formateNumber(["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]));
