function rollingDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function diceSimulation(num) {
  let results = [];
  for (let i = 0; i < num; i++) {
    const dice1 = rollingDice();
    const dice2 = rollingDice();
    const sum = dice1 + dice2;
    let result = "";

    if (sum === 7 || sum === 11) {
      result = "win";
    } else if (sum === 2 || sum === 3 || sum === 12) {
      result = "Lose";
    } else {
      result = "Roll Again";
    }

    results.push({ dice1, dice2, sum, result });
  }
  return results;
}

console.log(diceSimulation(10));
