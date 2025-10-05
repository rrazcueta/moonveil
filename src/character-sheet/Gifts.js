// import roll from "../util";

const roll = () => Math.ceil(Math.random() * 6);

export function PickGifts() {
  const weapons = [
    { on: [1], items: [{ description: "Sword, Minimum Damage 3" }] },
    { on: [2], items: [{ description: "Spear, Strong Damage +2" }] },
    { on: [3], items: [{ description: "Hammer, Critical Damage +d6*" }] },
    { on: [4], items: [{ description: "Bow, Ranged 2, Silent" }] },
    { on: [5], items: [{ description: "Whip, On Any Hit Pocket Down" }] },
    { on: [6], items: [{ description: "A Bomb, 4d6 damage" }] },
  ];

  const armor = [
    { on: [1, 2], items: [{ description: "Helmet, +1 Limit" }] },
    { on: [3, 4], items: [{ description: "Shield, Pocket Even? +1 Evade" }] },
    {
      on: [5],
      items: [{ description: "Armor, Damage Reduction 1, Breaks On Critical" }],
    },
    {
      on: [6],
      items: [
        { description: "Cloak, Can Pocket Roll On Move, Breaks On Critical" },
      ],
    },
  ];

  const spells = [
    {
      on: [1, 2],
      spells: [
        { description: "Air Pressure, DC8 Insight" },
        { description: "Heavylite, DC8 Insight" },
        { description: "Moonsmell, DC8 Insight" },
      ],
    },
    {
      on: [3, 4],
      spells: [
        { description: "Egress, DC9 Insight" },
        { description: "Invisibility, DC9 Insight" },
      ],
    },
    { on: [5], spells: [{ description: "Magic Orb, DC10 Insight" }] },
    { on: [6], spells: [{ description: "Sleepsand, DC12 Insight" }] },
  ];

  const miracles = [
    {
      on: [1, 2, 3],
      miracles: [{ description: "Healing Circle, DC10 Willpower" }],
    },
    { on: [4, 5, 6], miracles: [{ description: "Dawn Arm, DC11 Willpower" }] },
  ];

  function addUnique(list, items) {
    for (const item of items) {
      if (!list.some((existing) => existing.description === item.description)) {
        list.push(item);
      }
    }
  }

  const result = {
    backpack: [],
    magicAndSkills: [],
  };

  // --- Roll 2 distinct giftRolls ---
  let giftRolls = new Set();
  while (giftRolls.size < 2) {
    giftRolls.add(roll());
  }
  giftRolls = [...giftRolls];

  for (const giftRoll of giftRolls) {
    const typeRoll = roll();

    if ([1, 2].includes(typeRoll)) {
      const found = weapons.find((w) => w.on.includes(giftRoll));
      if (found) addUnique(result.backpack, found.items);
    } else if ([3, 4].includes(typeRoll)) {
      const found = armor.find((a) => a.on.includes(giftRoll));
      if (found) addUnique(result.backpack, found.items);
    } else if (typeRoll === 5) {
      const found = spells.find((s) => s.on.includes(giftRoll));
      if (found) addUnique(result.magicAndSkills, found.spells);
    } else {
      const found = miracles.find((m) => m.on.includes(giftRoll));
      if (found) addUnique(result.magicAndSkills, found.miracles);
    }
  }

  return result;
}
