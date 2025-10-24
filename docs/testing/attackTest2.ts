function roll(): number {
  return Math.ceil(Math.random() * 6);
}

function explodingRoll(
  { threshold = 6, advantage = 0 } = { threshold: 6, advantage: 0 }
): number {
  const r = advantage > 0 ? Math.max(roll(), roll()) : roll();
  return r >= threshold
    ? r + explodingRoll({ threshold, advantage: advantage - 1 })
    : r;
}

interface character {
  evade: number;
  pocket: number;
  limit: number;
  weapon: weapon;
}

interface weapon {
  description: string;
  minimum: number;
  strong: (a: number, b: number) => number;
  critical: (a: number, b: number) => number;
  strongBonus?: () => number;
  criticalBonus?: () => number;
}

function weaponSmith({
  description = "Fists",
  minimum = 1,
  strong = (a: number, b: number) => Math.min(a, b),
  critical = (a: number, b: number) => Math.max(a, b),
  strongBonus = () => 0,
  criticalBonus = () => 1,
}: Partial<weapon> = {}): weapon {
  return {
    description,
    minimum,
    strong,
    critical,
    strongBonus,
    criticalBonus,
  };
}

const basicWeapon = weaponSmith();

function characterGen({
  evade = 4,
  pocket = roll(),
  limit = 10,
  weapon = basicWeapon,
}: Partial<character> = {}): character {
  return {
    evade,
    pocket,
    limit,
    weapon,
  };
}

function rollAttack({
  attacker = characterGen(),
  defender = characterGen(),
  defend = false,
}) {
  const first = roll();
  const second = roll();
  const { pocket } = attacker;

  const ordered = [first, second, pocket].sort((a, b) => b - a);

  function outcome(first: number, second: number, pocket: number) {
    const sum = first + second;
    const targetDefense = Math.min(
      defender.pocket + defender.evade,
      defender.limit - 1
    );
    let damageTier = 0;

    if (sum <= defender.evade) {
      damageTier = 0;
    } else if (sum < targetDefense) {
      damageTier = 1;
    } else if (sum < defender.limit || !attacker.weapon.critical) {
      damageTier = 2;
    } else {
      damageTier = 3;
    }

    const strongBonus = attacker.weapon.strongBonus
      ? attacker.weapon.strongBonus()
      : 0;
    const criticalBonus = attacker.weapon.criticalBonus
      ? attacker.weapon.criticalBonus()
      : 0;

    const damageByTier = [
      0,
      attacker.weapon.minimum,
      attacker.weapon.strong(first, second) + strongBonus,
      attacker.weapon.critical(first, second) + strongBonus + criticalBonus,
    ];

    const damage =
      damageTier == 0
        ? 0
        : Math.max(damageByTier[damageTier], attacker.weapon.minimum);

    return {
      damage,
      damageTier,
      sum,
      used: [first, second],
      pocket: pocket,
    };
  }

  const outcomes = [
    outcome(ordered[0], ordered[1], ordered[2]),
    outcome(ordered[0], ordered[2], ordered[1]),
    outcome(ordered[1], ordered[2], ordered[0]),
  ];

  function pickBest<T>(
    fromItems: T[],
    firstBy: (a: T) => number,
    thenBy: (a: T) => number
  ): T {
    return fromItems.reduce((best, nextItem) => {
      if (firstBy(nextItem) > firstBy(best)) return nextItem;
      if (
        firstBy(nextItem) === firstBy(best) &&
        thenBy(nextItem) > thenBy(best)
      )
        return nextItem;
      return best;
    });
  }

  const bestAttack = pickBest(
    outcomes,
    (x) => x.damageTier,
    (x) => x.pocket
  );
  const bestPocket = pickBest(
    outcomes,
    (x) => x.pocket,
    (x) => x.damageTier
  );

  return defend ? bestPocket : bestAttack;
}

const sword = weaponSmith({
  description: "Sword",
  minimum: 3,
});

const spear = weaponSmith({
  description: "Spear",
  strongBonus: () => 2,
});

const hammer = weaponSmith({
  description: "Hammer",
  criticalBonus: () => explodingRoll(),
});

const axe = weaponSmith({
  description: "Axe",
  minimum: 2,
  criticalBonus: () => 2,
});

const fencing = weaponSmith({
  description: "Fencing Sword",
  minimum: 2,
  strongBonus: () => 1,
});

const halberd = weaponSmith({
  description: "2H Halberd",
  minimum: 2,
  strongBonus: () => 1,
  criticalBonus: () => explodingRoll(),
});

const lance = weaponSmith({
  description: "2H Lance",
  strongBonus: () => 2,
  criticalBonus: () => explodingRoll(),
});

const bigHammer = weaponSmith({
  description: "2H Hammer",
  criticalBonus: () => explodingRoll() + explodingRoll(),
});

const zwei = weaponSmith({
  description: "2H Sword",
  minimum: 3,
  criticalBonus: () => explodingRoll(),
});

const best = weaponSmith({
  description: "Lightsaber",
  minimum: 4,
  strongBonus: () => 3,
  criticalBonus: () => explodingRoll() + 1,
});

function getAverage(weapon: weapon, defend = false) {
  const trials = 10000;
  let totalDamage = 0;
  let totalPocket = 0;
  let damageArr: number[] = [];
  for (let i = 0; i < trials; i++) {
    const { damage, pocket } = rollAttack({
      attacker: characterGen({ weapon, pocket: roll() }),
      defender: characterGen({ evade: 4, pocket: roll(), limit: 11 }),
      defend,
    });
    totalDamage += damage;
    totalPocket += pocket;
    damageArr[damage] = (damageArr[damage] || 0) + 1;
  }
  const damageArrString = damageArr.map(
    (x) => (x ? x / trials : 0).toFixed(2) + "%"
  );
  return {
    weapon: weapon.description,
    averages: {
      averageDamage: (totalDamage / trials).toFixed(2),
      averagePocket: (totalPocket / trials).toFixed(2),
      averageValue: ((totalDamage + totalPocket) / trials).toFixed(2),
    },
    damageArrString,
  };
}

const swordAvg = getAverage(sword);
const swordAvgD = getAverage(sword, true);
console.log(swordAvg.averages);
console.log(swordAvg.damageArrString);
console.log(swordAvgD.averages);
console.log(swordAvgD.damageArrString);

const fencingAvg = getAverage(fencing);
const fencingAvgD = getAverage(fencing, true);
console.log(fencingAvg.averages);
console.log(fencingAvg.damageArrString);
console.log(fencingAvgD.averages);
console.log(fencingAvgD.damageArrString);

const spearAvg = getAverage(spear);
const spearAvgD = getAverage(spear, true);
console.log(spearAvg.averages);
console.log(spearAvg.damageArrString);
console.log(spearAvgD.averages);
console.log(spearAvgD.damageArrString);

const hammerAvg = getAverage(hammer);
const hammerAvgD = getAverage(hammer, true);
console.log(hammerAvg.averages);
console.log(hammerAvg.damageArrString);
console.log(hammerAvgD.averages);
console.log(hammerAvgD.damageArrString);

const axeAvg = getAverage(axe);
const axeAvgD = getAverage(axe, true);
console.log(axeAvg.averages);
console.log(axeAvg.damageArrString);
console.log(axeAvgD.averages);
console.log(axeAvgD.damageArrString);

const halberdAvg = getAverage(halberd);
const halberdAvgD = getAverage(halberd, true);
console.log(halberdAvg.averages);
console.log(halberdAvg.damageArrString);
console.log(halberdAvgD.averages);
console.log(halberdAvgD.damageArrString);

const lanceAvg = getAverage(lance);
const lanceAvgD = getAverage(lance, true);
console.log(lanceAvg.averages);
console.log(lanceAvg.damageArrString);
console.log(lanceAvgD.averages);
console.log(lanceAvgD.damageArrString);

const bigHammerAvg = getAverage(bigHammer);
const bigHammerAvgD = getAverage(bigHammer, true);
console.log(bigHammerAvg.averages);
console.log(bigHammerAvg.damageArrString);
console.log(bigHammerAvgD.averages);
console.log(bigHammerAvgD.damageArrString);

const zweiAvg = getAverage(zwei);
const zweiAvgD = getAverage(zwei, true);
console.log(zweiAvg.averages);
console.log(zweiAvg.damageArrString);
console.log(zweiAvgD.averages);
console.log(zweiAvgD.damageArrString);

const bestAvg = getAverage(best);
const bestAvgD = getAverage(best, true);
console.log(bestAvg.averages);
console.log(bestAvg.damageArrString);
console.log(bestAvgD.averages);
console.log(bestAvgD.damageArrString);

// console.log(rollAttack({ attacker: characterGen({ weapon: sword }) }));

// console.log(getAverage(basicWeapon));

// console.log(getAverage(sword));
// console.log(getAverage(spear));
// console.log(getAverage(hammer));
