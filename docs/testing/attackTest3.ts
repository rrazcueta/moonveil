function roll(): number {
  return Math.ceil(Math.random() * 6);
}

function explodingRoll(threshold = 6): number {
  const r = roll();
  return r >= threshold ? r + explodingRoll(threshold) : r;
}

interface Character {
  base: number;
  pocket: number;
  limit: number;
  weapon: Weapon;
}

interface Weapon {
  description: string;
  minimum: number;
  strong: number;
  critical: number;
}

function weaponSmith({
  description = "Club",
  minimum = 1,
  strong = 0,
  critical = 0,
}: Partial<Weapon>): Weapon {
  return {
    description,
    minimum,
    strong,
    critical,
  };
}

interface Character {
  base: number;
  pocket: number;
  limit: number;
  weapon: Weapon;
}

const baseWeapon = weaponSmith({});

function characterGen({
  base = 4,
  pocket = roll(),
  limit = 10,
  weapon = baseWeapon,
}: Partial<Character> = {}): Character {
  return {
    base,
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
  const targetDefense = Math.min(
    defender.limit - 1,
    defender.base + defender.pocket
  );
  function outcome(first: number, second: number, pocket: number) {
    const sum = first + second;

    let damage = Math.min(first, second);
    let damageTier = 0;

    if (sum >= targetDefense) {
      damage = Math.max(first, second) + attacker.weapon.strong;
      damageTier = 1;
    }
    if (sum >= defender.limit && attacker.weapon.critical > 0) {
      for (let i = 0; i < attacker.weapon.critical; i++) {
        damage += explodingRoll();
      }
      damageTier = 2;
    }
    if (damage < attacker.weapon.minimum) {
      damage = attacker.weapon.minimum;
    }

    return {
      damage,
      damageTier,
      used: [first, second],
      pocket,
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

  const r = defend ? bestPocket : bestAttack;

  return { ...r, targetDefense };
}

function getAverage(weapon: Weapon, trials = 10000) {
  function pocketFn() {
    // return 6;
    return roll();
    const r = roll();
    return r > 3 ? r : roll();
  }

  function enemyPocketFn() {
    // return 6;
    return roll();
    // return Math.ceil(Math.random() * 4);
    const r = roll();
    return r > 2 ? r : roll();
  }

  let totalDamage = 0;
  let totalPocket = 0;
  let tiers = [0, 0, 0];
  for (let i = 0; i < trials; i++) {
    const result = rollAttack({
      attacker: characterGen({ weapon, pocket: pocketFn() }),
      defender: characterGen({ pocket: enemyPocketFn(), limit: 12 }),
    });
    totalDamage += result.damage;
    totalPocket += result.pocket;
    tiers[result.damageTier]++;
  }

  let totalDamageD = 0;
  let totalPocketD = 0;
  let tiersD = [0, 0, 0];

  for (let i = 0; i < trials; i++) {
    const result = rollAttack({
      attacker: characterGen({ weapon, pocket: pocketFn() }),
      defender: characterGen({ pocket: enemyPocketFn(), limit: 12 }),
      defend: true,
    });
    totalDamageD += result.damage;
    totalPocketD += result.pocket;
    tiersD[result.damageTier]++;
  }

  return {
    avg: totalDamage / trials,
    pock: totalPocket / trials,
    avgDefend: totalDamageD / trials,
    pockD: totalPocketD / trials,
  };
}

const sword = weaponSmith({ description: "Sword", minimum: 3 });
const spear = weaponSmith({ description: "Spear", strong: 1 });
const hammer = weaponSmith({ description: "Hammer", critical: 1 });

console.log("Base", getAverage(baseWeapon));
console.log("Sword", getAverage(sword));
console.log("Spear", getAverage(spear));
console.log("Hammer", getAverage(hammer));

console.log(rollAttack({ attacker: characterGen({ weapon: hammer }) }));
