function calculater(num1, num2, str) {
  let result;
  switch (str) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num1 / num2;
      break;

    default:
      throw new Error("Invalid");
  }
  return result;
}

console.log(calculater(5, 5, "*"));
