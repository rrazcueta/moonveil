import { number } from "yargs";

function roll() {
  return Math.ceil(Math.random() * 6);
}

function rollDangerDice(count = 2, threshold = 1) {
  let actions = 0;

  while (count > 0) {
    actions++;
    let diceToRoll = count;

    for (let i = 0; i < diceToRoll; i++) {
      const r = roll();
      if (r <= threshold) count--;
    }
  }

  return actions;
}

const attempts = 100;
let totalActions = 0;
let max = 0;
let min = Number.MAX_SAFE_INTEGER;

for (let i = 0; i < attempts; i++) {
  const a = rollDangerDice(3, 2);
  totalActions += a;
  if (a > max) max = a;
  if (a < min) min = a;
}

console.log(totalActions / attempts);
console.log(max);
console.log(min);
