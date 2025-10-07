function roll() {
  return Math.ceil(Math.random() * 6);
}

function rollDiminishing(previous = 7) {
  const r = Math.min(roll(), previous - 1);
  return r === 1 ? r : rollDiminishing(r) + r;
}

function rollExploding(threshold = 6) {
  const r = roll();
  return r >= threshold ? r + roll(rollExploding(threshold)) : r;
}

console.log(rollDiminishing());

let total = 0;
let totalExp = 0;

for (let i = 0; i < 1000; i++) {
  total += rollDiminishing();
  totalExp += rollExploding();
}

console.log(total / 1000);
console.log(totalExp / 1000);
