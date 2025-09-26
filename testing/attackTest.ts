console.log('quoka');

function roll(): number {
  return Math.ceil(Math.random() * 6);
}

function explodingRoll(t = 6): number {
    const r = roll();
    return r < t ? r : r + explodingRoll(t);
}

interface weapon {
    min?: number;
    strong?: (a: number, b: number) => number;
    critical?: () => number;
}

function rollAttack(
    {
        weapon = {},
        a = roll(),
        b = roll(),
        pocket = roll(),
        enemy = {
            evade: 5,
            limit: 10,
            pocket: roll()
        }
    }: {
        weapon: weapon,
        a?: number,
        b?: number,
        pocket?: number,
        enemy?: {
            evade: number,
            limit: number,
            pocket: number
        }
    }
){
    const o: number[] = [a, b, pocket].sort((x, y) => y - x);

    function attackOutcome (a : number, b : number, pocket : number){
        const sum = a+b;
        const targetDefense = enemy.pocket + enemy.evade;
        let damageTier = 0;

        
        if(sum <= enemy.evade) {
            damageTier = 0;
        } else if (sum < targetDefense){
            damageTier = 1;
        } else if (sum < enemy.limit || !weapon.critical){
            damageTier = 2;
        } else {
            damageTier = 3;
        }

        
        const weakDamage = weapon.min?? 1;
        const strongDamage = weapon.strong ? weapon.strong(a, b) : Math.max(a, b)
        const criticalDamage = damageTier == 3 && weapon.critical? weapon.critical() : 0;

        let damage = 0;
        if(damageTier == 1) {
            damage = weakDamage;
        } else if (damageTier == 2) {
            damage = Math.max(weakDamage, strongDamage);
        } else if (damageTier == 3) {
            damage = strongDamage + criticalDamage;
        }

        return {
            damage,
            damageTier,
            used: [a, b],
            pocket,
        }
    }

    const attackPossibilities = [
        attackOutcome(o[0], o[1], o[2]),
        attackOutcome(o[0], o[2], o[1]),
        attackOutcome(o[1], o[2], o[0])
    ]

    function pickBest<T>(fromItems: T[], firstBy: (a: T) => number, thenBy: (a: T) => number): T {
    return fromItems.reduce((best, nextItem) => {
        if (firstBy(nextItem) > firstBy(best)) return nextItem;
        if (firstBy(nextItem) === firstBy(best) && thenBy(nextItem) > thenBy(best)) return nextItem;
        return best;
    });
    }

    const bestAttack = pickBest(attackPossibilities, x => x.damageTier, x => x.pocket)
    const bestPocket = pickBest(attackPossibilities, x => x.pocket, x => x.damageTier)

    return {
        bestAttack,
        bestPocket
    }
}

const basic : weapon = {};
const sword : weapon = { min: 3};
const spear: weapon = {strong: (a, b) => Math.max(a, b) + 2};
const axe: weapon = {min: 1, strong: (a, b) => Math.max(a, b) + 1};
const hammer: weapon = {critical: () => explodingRoll()};

console.log(rollAttack({weapon: sword}).bestAttack);

const attempts = 100000;

let damage : number[] = []
let totalDamage : number = 0;
let pocket: number[] = []
let totalPocket : number = 0;

let pDamage : number[] = []
let pTotalDamage : number = 0;
let pPocket : number[] = []
let pTotalPocket : number = 0;

for(let i = 0; i < attempts; i++) {
    const result = rollAttack({weapon: hammer});

    const dmg = result.bestAttack.damage;
    const pkt = result.bestAttack.pocket;
    damage[dmg] = (damage[dmg] ?? 0) + 1;
    totalDamage += dmg;
    pocket[pkt] = (pocket[pkt] ?? 0) + 1;
    totalPocket += pkt;

    const pDmg = result.bestPocket.damage;
    const pPkt = result.bestPocket.pocket;
    pDamage[pDmg] = (pDamage[pDmg] ?? 0) + 1;
    pTotalDamage += pDmg;
    pPocket[pPkt] = (pocket[pPkt] ?? 0) + 1;
    pTotalPocket += pPkt;
}

console.log([...damage].map((x, i) => ((x??0)/attempts*100).toFixed(2) + '%').join(', '));
console.log('Average best damage: ' + (totalDamage/attempts).toFixed(2));
console.log([...pocket].map((x, i) => (( (x??0)/attempts*100).toFixed(2)) + '%').join(', '));
console.log('Average damage pocket: ' + (totalPocket/attempts).toFixed(2));

console.log([...pDamage].map((x, i) => (( (x??0)/attempts*100).toFixed(2)) + '%').join(', '));
console.log('Average defense damage: ' + (pTotalDamage/attempts).toFixed(2));
console.log([...pPocket].map((x, i) => (( (x??0)/attempts*100).toFixed(2)) + '%').join(', '));
console.log('Average defense pocket: ' + (pTotalPocket/attempts).toFixed(2));

console.log('Average damage: ' + ((totalDamage + pTotalDamage)/attempts).toFixed(2));
console.log('Average pocket: ' + ((totalPocket + pTotalPocket)/attempts).toFixed(2));
console.log('Average Value: ' + ((totalDamage + pTotalDamage + totalPocket + pTotalPocket)/attempts).toFixed(2));

console.log(pDamage.map((x, i) => (!x ? 'banana' : 'apple')).join(', '));