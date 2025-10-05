// import roll from "../util";
import { PickGifts } from "./Gifts";

const roll = () => Math.ceil(Math.random() * 6);

export function RandomizeCharacter(name = "Unnamed") {
  const startingClass = [
    { name: "Fighter", distribution: [2, 2, 1, 1] },
    { name: "Ranger", distribution: [2, 1, 2, 1] },
    { name: "Barbarian", distribution: [2, 1, 1, 2] },
    { name: "Wizard", distribution: [1, 2, 2, 1] },
    { name: "Scout", distribution: [1, 2, 1, 2] },
    { name: "Witch", distribution: [1, 1, 2, 2] },
  ][roll() - 1];

  const randomBaseHP = roll();

  const { backpack, magicAndSkills } = PickGifts();
  const dg = { description: "Dungeon Gear" };
  backpack.push(...[dg, dg, dg]);

  return {
    name,
    level: 1,
    class: startingClass.name,
    hp: startingClass.distribution[0] * 3 + randomBaseHP,
    maxHp: startingClass.distribution[0] * 3 + randomBaseHP,
    str: startingClass.distribution[0],
    maxStr: startingClass.distribution[0],
    dex: startingClass.distribution[1],
    maxDex: startingClass.distribution[1],
    ins: startingClass.distribution[2],
    maxIns: startingClass.distribution[2],
    wil: startingClass.distribution[3],
    maxWil: startingClass.distribution[3],
    pocket: roll(),
    evade: 5,
    limit: 10,
    backpack: backpack.map((g) => g.description).join("\n"),
    magicAndSkills: magicAndSkills.map((g) => g.description).join("\n"),
    free: `Coin ${roll()}`,
  };
}
