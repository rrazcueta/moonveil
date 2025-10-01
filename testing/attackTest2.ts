function roll(): number {
  return Math.ceil(Math.random() * 6);
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
  critical: () => number;
}

function weaponSmith({
  description = "Fists",
  minimum = 1,
  strong = (a: number, b: number) => Math.max(a, b),
  critical = () => roll() + 1,
}: Partial<weapon> = {}): weapon {
  return {
    description,
    minimum,
    strong,
    critical,
  };
}

const basicWeapon = weaponSmith();

function characterGen({
  evade = 5,
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

function rollAttack(attacker = characterGen(), defender = characterGen()) {}
