// console.log("quoka");

// function roll(): number {
//   return Math.ceil(Math.random() * 6);
// }

// function explodingRoll(t = 6): number {
//   const r = roll();
//   return r < t ? r : r + explodingRoll(t);
// }

// interface weapon {
//   name?: string;
//   min?: number;
//   strong?: (a: number, b: number) => number;
//   critical?: () => number;
// }

// interface attackInput {
//   weapon: weapon;
//   a?: number;
//   b?: number;
//   pocket?: number;
//   enemy?: {
//     evade: number;
//     limit: number;
//     pocket?: number;
//   };
//   defend?: boolean;
// }

// function rollAttack({
//   weapon = {},
//   a = roll(),
//   b = roll(),
//   pocket = roll(),
//   enemy = {
//     evade: 5,
//     limit: 10,
//     pocket: roll(),
//   },
//   defend = false,
// }: attackInput) {
//   const o: number[] = [a, b, pocket].sort((x, y) => y - x);

//   function attackOutcome(first: number, second: number, pocket: number) {
//     const sum = first + second;
//     const ePocket = enemy.pocket ?? 0;
//     const targetDefense = Math.min(ePocket + enemy.evade, enemy.limit);
//     let damageTier = 0;

//     if (sum <= enemy.evade) {
//       damageTier = 0;
//     } else if (sum < targetDefense) {
//       damageTier = 1;
//     } else if (sum < enemy.limit || !weapon.critical) {
//       damageTier = 2;
//     } else {
//       damageTier = 3;
//     }

//     const weakDamage = weapon.min ?? 1;
//     const strongDamage = weapon.strong
//       ? weapon.strong(first, second)
//       : Math.max(first, second);
//     const criticalDamage =
//       damageTier == 3 && weapon.critical ? weapon.critical() : 0;

//     let damage = 0;
//     if (damageTier == 1) {
//       damage = weakDamage;
//     } else if (damageTier == 2) {
//       damage = Math.max(weakDamage, strongDamage);
//     } else if (damageTier == 3) {
//       damage = strongDamage + criticalDamage;
//     }

//     return {
//       damage,
//       damageTier,
//       used: [first, second],
//       pocket,
//     };
//   }

//   const attackPossibilities = [
//     attackOutcome(o[0], o[1], o[2]),
//     attackOutcome(o[0], o[2], o[1]),
//     attackOutcome(o[1], o[2], o[0]),
//   ];

//   function pickBest<T>(
//     fromItems: T[],
//     firstBy: (a: T) => number,
//     thenBy: (a: T) => number
//   ): T {
//     return fromItems.reduce((best, nextItem) => {
//       if (firstBy(nextItem) > firstBy(best)) return nextItem;
//       if (
//         firstBy(nextItem) === firstBy(best) &&
//         thenBy(nextItem) > thenBy(best)
//       )
//         return nextItem;
//       return best;
//     });
//   }

//   const bestAttack = pickBest(
//     attackPossibilities,
//     (x) => x.damageTier,
//     (x) => x.pocket
//   );
//   const bestPocket = pickBest(
//     attackPossibilities,
//     (x) => x.pocket,
//     (x) => x.damageTier
//   );

//   return defend ? bestPocket : bestAttack;
// }

// function getAverage(attackInput: attackInput, reps = 3, attempts = 10000) //   let totalDamageTier = 0;
//   let totalPocket = 0;

//   let pocket = roll();
//   let current = 0;
//   if (pocket < 4) {
//     pocket = roll();
//   }

//   for (let i = 0; i < attempts; i++) {
//     const r = rollAttack(attackInput);
//     totalDamage += r.damage;
//     totalDamageTier += r.damageTier;
//     totalPocket += r.pocket;

//     pocket = r.pocket;

//     current++;
//     if (current > reps) {
//       current = 0;
//       pocket = roll();
//       if (pocket < 4) {
//         pocket = roll();
//       }
//     }
//   }

//   return {
//     weapon: attackInput.weapon.name ?? "unnamed",
//     damage: totalDamage / attempts,
//     damageTier: totalDamageTier / attempts,
//     pocket: totalPocket / attempts,
//   };
// }

// const basic: weapon = { name: "basic" };
// const sword: weapon = { name: "sword", min: 3 };
// const spear: weapon = { name: "spear", strong: (a, b) => Math.max(a, b) + 2 };
// const knife: weapon = {
//   name: "knife",
//   strong: (a, b) => Math.min(a, b) + roll(),
// };
// const axe: weapon = {
//   name: "axe",
//   min: 1,
//   strong: (a, b) => Math.max(a, b) + 1,
// };
// const hammer: weapon = { name: "hammer", critical: () => roll() };

// const reps = 5;
// const enemy = { evade: 5, limit: 10 };
// console.log(getAverage({ weapon: basic, enemy }, reps));
// console.log(getAverage({ weapon: sword, enemy }, reps));
// console.log(getAverage({ weapon: spear, enemy }, reps));

// console.log(getAverage({ weapon: knife, enemy }, reps));
// console.log(getAverage({ weapon: axe, enemy }, reps));
// console.log(getAverage({ weapon: hammer, enemy }, reps));

// console.log(getAverage({ weapon: basic, enemy, defend: true }, reps));
// console.log(getAverage({ weapon: sword, enemy, defend: true }, reps));
// console.log(getAverage({ weapon: spear, enemy, defend: true }, reps));

// console.log(getAverage({ weapon: knife, enemy, defend: true }, reps));
// console.log(getAverage({ weapon: axe, enemy, defend: true }, reps));
// console.log(getAverage({ weapon: hammer, enemy, defend: true }, reps));
