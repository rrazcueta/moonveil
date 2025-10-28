---
title: "Moonveil"
subtitle: "Version 1.1"
author: "foodpuzz & lunarsignals"
documentclass: extarticle
geometry: [a5paper, margin=0.5in]
fontsize: 9pt
mainfont: "Times New Roman"
output:
  pdf_document:
    latex_engine: xelatex
header-includes:
  - \usepackage{titlesec}
  - \titleformat{\section}{\normalfont\fontsize{10}{12}\bfseries}{\thesection}{1em}{}
  - \titleformat{\subsection}{\normalfont\fontsize{9}{11}\bfseries}{\thesubsection}{1em}{}
  - \renewcommand\normalsize{\fontsize{9}{11}\selectfont}
  - \newcommand{\sectionbreak}{\clearpage}
---

\clearpage

> THE MOON IS FALLING TO EARTH, AND IT’S MAKING THINGS WEIRD. MOON SHARDS ARE BLANKETING AREAS WITH STRANGE MAGIC—THE MOONVEIL. SOME OF IT IS HARMLESS, AND SOME OF IT IS ACTUALLY PRETTY COOL, BUT SOME OF IT IS BAD, AND YOU’VE GOTTA DO SOMETHING ABOUT IT.

> YOU’RE IN A CARAVAN OF SEEKERS INVESTIGATING THE MOONVEIL. YOUR VEIL GUIDE WILL TAKE YOU WHERE YOU NEED TO GO.

## What You Need

- 2–6 players
- A ton of six-sided dice (d6s)
- Pencil, paper, and character sheets

## Who is this for?

MOONVEIL is a tabletop dungeon crawler for risk takers.

Some unique aspects

- Dice manipulation
- Ability endurance
- Skill drafting

Other design philosophies

- 2d6
- Classless, deadly
- Collaborative narrative

Inspired by

- ICRPG, Shadowdark, FIST, Mörk Borg, 2400, Dungeon World, Cairn, DURF
- Dungeon Meshi, Wizardry, Tactics Ogre
- Magic the Gathering
# Create Your Seeker

You are a Seeker exploring the Moonveil looking for fallen Pieces of the Moon.

## Abilities, Hit Points, Pocket

Assign **[3, 2, 1, 1]** to STR, DEX, INS, and WIL in any order, or roll d6 for a spread:

| d6  | Strength | Dexterity | Insight | Willpower |
| :-: | :------: | :-------: | :-----: | --------- |
|  1  |    2     |     2     |    1    | 1         |
|  2  |    2     |     1     |    2    | 1         |
|  3  |    2     |     1     |    1    | 2         |
|  4  |    1     |     2     |    2    | 1         |
|  5  |    1     |     2     |    1    | 2         |
|  6  |    1     |     1     |    2    | 2         |

**Hit Points (HP)** is your distance to Death. Roll **d6 and add (3 × STR)** for your starting and Maximum HP.

**Pocket** represents luck and momentum. Roll **d6** and **keep that die** to track Pocket.

### The Hit Track

**Hit Track** shows how attacks affect you. There are three thresholds: Evade, Defense, Limit.

**Evade starts at 4**. Mark it on your Hit Track. Attacks at or under **Evade** are **Misses**.

**Defense** is equal to **Evade + Pocket**.

- Mark your Defense by putting your **Pocket die on your Hit Track at your Defense value**
- Defense **cannot reach or exceed your Limit**. If it would, lower it to **one less than Limit**.
- Attacks under Defense are **Weak Hits** -- at or over are **Strong Hits**

**Limit starts at 10**. Mark it on your Hit Track. Attacks at or over **Limit** are **Critical Hits**.

Start at **Level** 1 and fill in your **Name** and **Portrait**.

\clearpage

## Starting Equipment and Magic

Start with d6 **Coin** and 3 **Dungeon Gear**. Then choose or roll d66 twice for starting gifts.

| d6  | d6  | Equipment and Magic                                       |
| --- | --- | --------------------------------------------------------- |
| 1-2 | 1   | Sword                                                     |
|     | 2   | Spear                                                     |
|     | 3   | Hammer                                                    |
|     | 4   | Bow                                                       |
|     | 5   | Whip                                                      |
|     | 6   | A Huge Bomb!                                              |
| 3-4 | 1-2 | Helmet                                                    |
|     | 3-4 | Shield                                                    |
|     | 5   | Leather Armor                                             |
|     | 6   | Cloak                                                     |
| 5   | 1-2 | **Air Pressure**, **Heavylite**, and **Moonsmell** Spells |
|     | 3-4 | **Egress** and **Invisibility** Spells                    |
|     | 5   | **Magic Orb** Spell                                       |
|     | 6   | **Sleepsand** Spell                                       |
| 6   | 1-3 | **Healing Circle** Miracle                                |
|     | 4-6 | **Dawn Arm** Miracle                                      |

## Draft and Choose An Ability

Draft a Skill.

Increase one Ability point +1.

<!-- Roll d66 for a small, **Extra** Gift to take with you.

| d6  | d6  |                                        |
| --- | --- | -------------------------------------- |
| 1-3 | 1   | A letter from a loved one...           |
|     | 2   | A bloody bag full of coins...          |
|     | 3   | A soapstone lion...                    |
|     | 4   | A mysterious map...                    |
|     | 5   | A rusted key...                        |
|     | 6   | A package that makes ticking sounds... |
| 4-6 | 1   | A broken sword...                      |
|     | 2   | A diary that writes itself...          |
|     | 3   | A key carved from a bone...            |
|     | 4   | A small hand mirror...                 |
|     | 5   | A loaded pair of dice...               |
|     | 6   | A vial of blood...                     | -->

<!-- | 5-6 | 1   | A sealed royal message...              |
|     | 2   | A tiny bell...                         |
|     | 3   | A bottle of shimmering ink             |
|     | 4   | A lock of hair...                      |
|     | 5   | A string of prayer beeds...            |
|     | 6   | A nondescript gold ring...             | -->
# How To Play

As you explore, **talk with your Guide** about your intentions. You can attempt anything, and you automatically succeed at **reasonable or unchallenged actions**. When te outcome is risky, uncertain, or perilous, you must make a **Dice Check** or enter an **Encounter**.

## Rolling and the Pocket Push

The fiction and the mechanics move together. Your **Pocket** is your character’s luck, confidence, their strange pull on the world’s luck — and at the table, it lets you swap a die from one roll to the next. Your **Abilities** are their spirit and endurance — and mechanically, you spend them to push through bad rolls when your luck has run.

When you take a significant risk the Guide sets the **Dice Check** (**DC**) and you roll 2d6 against it. At or over the DC is a success. If the result of the roll is unfavorable you can choose to do one or both:

1. **Pocket**: Replace one of the dice with your Pocket
2. **Push**: Mark a pip in a relevant Ability to reroll

### Abilities and Pips

The Guide indicates which Abilities to use for a roll.

- **Strength**: fighting and raw power
- **Dexterity**: speed and precision
- **Insight**: depth of knowledge
- **Willpower**: your inner drive

An Ability's value is the number of pips you can mark for that Ability.

### Advantage and Disadvantage

In Advantage roll an extra die and remove the worst. In Disadvantage roll an extra die and lose the best.

## Other rolls

### Pocket Rolls

Your Pocket fluctuates with your fate. You can mark Dexterity to reroll any Pocket roll.

- **Pocket**: set your Pocket to d6.
- **Pocket Up**: roll d6 and compare to your Pocket. Take the bigger value.
- **Pocket Down**: roll d6 and compare to your Pocket. Take the smaller value.

### Exploding Rolls

Rolls denoted by an asterisk are exploding rolls. Reroll these rolls on 6, adding all the dice rolled this way.
# Items

Exploring the Moonveil means hauling gear — and sometimes hauling friends. Track everything you carry in **Equipment & Backpack**.

- **Slots**: Most items take up 1 slot
  - Larger items take up 2 or more slots
  - Smaller items fit multiple to one slot
- **Extra**: The smallest things like letters, keys, or coins are free to carry

## Dungeon Gear

You can quickly gear up by purchasing **Dungeon Gear**. It is a special item that takes 1 slot. When you use it, it becomes any reasonable adventuring tool like a club or knife, arrows, a tent, rope, torches, rations, etc.

For some kinds of items roll d6 to determine how much is available. Examples:

- If you pull out rope you have d6 x 10 feet of rope
- If you pull out rations you have enough food and drink for d6 Seekers.

If you think you might need something in particular, ask the Guide if they would allow it as Dungeon Gear. If they say no, ask what it would take to acquire it.

## Encumberance

You can carry 6 + Willpower items without penalty. For each item beyond that, you gain **Encumbrance**. Subtract your Encumbrance from every roll before resolving it.

## Carrying Your Friends

Carrying a Seeker, without their gear, takes 5 slots. You need to accomodate slots for your own gear and any gear of theirs as well.
# Magic

Magic comes in two forms: **Spells** and **Miracles**. Spells are shaped by **Insight** into the unknown. Miracles are drawn forth by sheer **Willpower**.

## Casting Magic

When you cast a Spell or Miracle, roll 2d6 against its DC:

- Success: Roll ≥ DC – the effect takes place.
- Failure: Roll < DC – the effect fizzles, and you lose it until you Rest.

## Spells and Arcane Failure

Each day **The Verge** starts at 4.

If your Spell roll fails at or under The Verge, lose 1 Max HP and increase The Verge +1.

## Miracles and Penance

Instead of spending Willpower to reroll a Miracle, you may take on **Guilt**.

- If you have no Guilt, fill 1 Backpack slot with Guilt.
- Otherwise, double the amount you are carrying.

Guilt cannot be discarded. Guilt is removed only by genuine sacrifice, as decided with the Guide.
# Death, Rest, and Growth

## Death

At 0 HP you are dying. Only safety and long, sustained care can save you.

## Rest

In a safe space, share a meal and spend 8 hours to recover.

- **Determine HP**: Roll a number of d6 equal to your Level, then add (3 × Strength). You can set your HP to this total.
- Recover Ability Points, Spells, Miracles, and lost HP
- Select Active Skills
- Roll Pocket

## Growth

The life of a Seeker is hard. You can take a moment while resting to remember the good times and the bad and grow.

### Make a Record

You may choose to **Make a Record** — a note, sketch, meal, or other memento of your experience. **Spend a resource** like Dungeon Gear and

- Describe your work to the table
- Roll DC7 Insight to determine if it was successful

Examples:

- Around the campfire you recount your fight with the giant spider. You use a Dungeon Gear as a prop - a **Net**. You roll 5 and fall to the floor as you get trapped in your own net.
- You take out your journal to make a drawing of the mushrooms you just found. You roll 10. The drawing is fairly accurate. Back in town you meet a mycologist who offers to take you to a cave where you might find some very interesting mushrooms.

Successful or not - take note. The Guide is watching and your records are reflections into your future.

### Level Up

If you reached a milestone

- Level +1
- Draft a new Skill.
- +1 in any Ability Point
# Encounters

In a clash of steel or a sprung trap - each moment is a test. You're rolling dice, swapping your Pocket, and spending Ability Points. When you hold the advantage, strike!

The Guide sets the scene in terms of what the other

- Describe the dungeon in terms of zones of action
- Outside of the narrative description of the current area

  - Describe the area in terms of zones, distances, and movement
  - Describe obvious interactive elements

### Surprise

If one side is **Surprised** at the start of an Encounter:

- The other side takes **free turns**
- Then roll **initiative** and continue the encounter normally

## Initiative

Encounters are run in rounds. Start each round with a d6 **Initiative** roll to determine when you can act. On a 4–6 you act before the Guide; on a 1–3 you act after the Guide. Reroll by marking Dexterity.

- **Opening Seekers**: if you rolled 4-6 take you can take your turn first
- **Guide**:
  - Take enemy turns
  - Trigger world events
- **Closing Seekers**: if you have yet to take your turn, take it here

On your turn, take a **Move** and an **Action** in any order alongside other Seekers taking their turns.
\clearpage

## Movement

Moves change your location, your relative position, or help you regain your footing.

### Move Options

When you take a Move, choose from one of the following or anything else you could easily attempt in a moment:

- Travel - Spend 1 Move to travel to an adjacent area.
- Reposition - Spend 1 Move to reposition yourself relative to other things in the same area.
- Footing - Spend 1 Move to roll Pocket.
- Quick - Spend an Action to gain an additional Move.

### Obstacles

If you need to navigate carefully—such as crawling over allies in a cramped space, avoiding a trap, or crossing a slick surface—roll **Pocket Down**.

If you want to move behind an enemy, **Sneak** with DC10 Dexterity to go Unnoticed and move behind an enemy:

- Roll with Advantage if the enemy is engaged with someone or something else.
- Roll with Disadvantage if multiple enemies block the way or the space is narrow.
- On failure the blocking enemy gets a free attack.
\clearpage

## Actions

When you take an Action, choose from one of the following or anything else you could reasonably attempt in a moment.

### Attack

Make an attack to damage an enemy. First confirm the target:

- Melee: a nearby enemy, 0 Moves away. **The opposing side chooses which enemy**.
- Ranged: **an enemy of your choice** up to the weapon's Range away.

Then roll 2d6 and compare both dice against the target’s **Defense** and **Limit** to determine if and how hard the attack hits.

| Thresholds | Tier             | Damage            | Strong | Critical |
| ---------- | ---------------- | ----------------- | :----: | :------: |
| ≤ Evade    | **Miss**         | None              |        |          |
| < Defense  | **Weak Hit**     | 1                 |        |          |
| ≥ Defense  | **Strong Hit**   | Smaller Die Value |   X    |          |
| ≥ Limit    | **Critical Hit** | Bigger Die Value  |   X    |    X     |

Weapons may get special effects on Strong or Critical Hits.

### Deduction

Mark 1 Insight and work with the Guide to reveal or create useful information about the challenge at hand. Identify a previously unknown Advantage over a challenge or enemy, or remove a Disadvantage affecting the Team.

Examples:

- Reveal hints or solutions to an encounter, puzzle, or trap
- Gather a battlefield advantage, a weak structure, or an escape
- Identify enemy behaviors, inclinations, or weakspots

If you believe the information provides no meaningful benefit, inform the Guide, remove it from the fiction, and refund the cost.

### Rally

Spend an Action and mark 1 Willpower to

- Erase marked pips in Strength, Dexterity, and Insight
- Restore 1d6 Hit Points
- Pocket Up
\clearpage

## Gambits

Wager your Ability Points to perform Gambits.

### Damage

Before a melee attack if you have at least 1 pip of Strength.

- On a Strong Hit or better
  - Smash and deal d6\* bonus damage to the original target or
  - Cleave and deal d6 damage to each nearby enemy
- If your attack roll is less than the target Limit, mark all your Strength.

### Control

Before a melee attack if you have a Pocket of 4 or more.

- Choose your target among nearby enemies.
- Depending on the Hit
  - Strong Hit, choose one effect
  - Critical Hit, choose two effects
- Effects to choose
  - Force the target to roll Pocket Down
  - Force the target to Move 1
  - Recover your Move
- If your attack roll is less than the target Limit, roll Pocket Down.

### Precision

Before a ranged attack if you have at least 1 pip of Dexterity.

- Deal double damage or the target rolls Pocket Down
- If your attack roll is less than the target Limit, mark all your Dexterity

### Full Defend

After being hit if you have at least 1 pip of Dexterity.

- Roll DC10 Dexterity. On success, negate all damage and effects.
- On failure, take full damage, and mark all your Dexterity.
# The Armory

| Equipment   | Cost | Description                                                     |
| ----------- | ---: | --------------------------------------------------------------- |
| Shield      |    4 | When your Pocket is Odd, Defense +1                             |
| Greatshield |    8 | 2 Slots, Defense +1, but when Pocket is under 4, you can't Move |
| Helmet      |    2 | Limit +1                                                        |
| Cloak       |    6 | Can roll Pocket on Moving                                       |

| Armor  | Cost | Slots | Description                                                          |
| ------ | ---: | :---: | -------------------------------------------------------------------- |
| Light  |    2 |   1   | Weak Hit Damage Reduction -1                                         |
| Medium |    5 |   2   | Damage Reduction -1                                                  |
| Heavy  |  >50 |   3   | Damage Reduction -2, but when your Pocket is under 4, you can't Move |

| Melee                 | Cost | Description                                    |
| --------------------- | ---: | ---------------------------------------------- |
| Club, Knife, or Staff |    1 | Can be found in Dungeon Gear                   |
| Bomb                  |    2 | Range 1. 1 Round to detonate. d6 area damage.  |
| A Huge Bomb!          |  >25 | Range 1. 1 Round to detonate. 6d6 area damage. |
| Dagger                |    2 | Roll Advantage When Unnoticed                  |
| Whip                  |    3 | Target rolls Pocket Down on any hit            |
| Spear                 |    4 | Strong Damage +2                               |
| Hammer                |    4 | Critical Damage +d6\*                          |
| Axe                   |    4 | Minimum Damage 2                               |
|                       |      | Critical Damage +2                             |
| Sword                 |    5 | Minimum Damage 3                               |
| Fencing Sword         |    5 | Minimum Damage 2                               |
|                       |      | When Evading melee, Attacker loses their Move  |

| 2H Melee     | Cost | Slots | Description            |
| ------------ | ---: | :---: | ---------------------- |
| Quarterstaff |    2 |   1   | Critical +2            |
| Great Club   |    8 |   2   | Critical Damage +2d6\* |
| Pike         |    9 |   2   | Strong Damage +6       |
| Horse Sword  |   10 |   2   | Minimum Damage 3       |
|              |      |       | Critical Damage +d6\*  |
| Halberd      |   10 |   2   | Strong Damage +2       |
|              |      |       | Critical Damage +d6\*  |
| Zweihander   |    9 |   2   | Minimum Damage 3       |
|              |      |       | Strong Damage +2       |

| Ranged          | Cost | Range | Slots | Description                      |
| --------------- | ---: | :---: | :---: | -------------------------------- |
| Throwing Knife  |    2 |   1   |  4:1  | Melee Minimum Damage 2           |
| Javelin         |    2 |   1   |  2:1  | Melee Strong Damage +1           |
| Throwing Axe    |    3 |   1   |   1   | Melee Critical Damage +d6/2      |
| Bow             |    2 |   2   |   1   |                                  |
| Longbow         |    3 |   3   |   1   | Critical Damage +d6\*            |
|                 |      |       |       | Roll Disadvantage against Near.  |
|                 |      |       |       | Spend Action and Move to shoot.  |
| Crossbow        |    6 |   2   |   1   | Strong Damage +2                 |
|                 |      |       |       | Spend Move to Reload.            |
| Heavy Crossbow  |   10 |   2   |   1   | Strong Damage +3                 |
|                 |      |       |       | Spend Action to Reload.          |
| Quiver or Cache |    1 |       |       | Can be found in Dungeon Gear     |
|                 |      |       |       | Empties out when rolling under 3 |
# The Archive

## Insight Spell List

### Air Pressure, DC8

Make the air thick like water.  
_The world feels heavier, and every breath resists you._

### Egress, DC9

You and nearby allies escape to safety.  
_The air ripples, opening a path just for you._

### Heavylight, DC8

Conjure a glowing boulder in your hands.  
_Its warm glow pulses with quiet weight._

### Invisibility, DC9

You or something you touch is Unnoticed for d6 rounds.  
_Shadows cling to you like a second skin._

### Magic Orb, DC10

2d6 area damage.  
_Energy coils and bursts, singing through the air._

### Magic Shield, DC9

Defense +1, Damage Reduction -1 to self.  
_A faint shimmer bends the world around you._

### Moonsmell, DC8

Heightened senses.  
_The scent of magic lingers, sharp and sweet._

### Sleepsand, DC12

Sleep.  
_A soft dust drifts down, lulling even the fiercest foe._

<!-- | Eye Spy      | 8   | Conjure a shortlived sprite. See what it sees. |
| Ice Column   | 8   | Conjure a slippery ice structure. Range 1.     |
| Ice Sheet    | 8   | Conjure a slippery surface. Range 1.           |
| Telepathy    | 8   | Extrasensory communication.                    |
| Fire Blast   | 9   | All near take 2d6 damage.                      |
| Hydra        | 10  | Range 1. Summon a flaming serpent.             |
|              |     | Shoots a nearby enemy for 2 damage.            |
|              |     | Each round roll d6, it dies on 1.              | -->

\clearpage

## Willpower Miracle List

### Dawn Arm, DC10

Touch a weapon. +d6 damage until a miss.  
_The weapon hums with righteous fire in your hand._

### Healing Circle, DC10

Heal +d6 to area.  
_Light blooms softly, knitting flesh and spirit._

### Holy Protection, DC10

All nearby allies gain Defense +1 for d6 rounds.  
_A radiant aura shields those you cherish._

### Resurrection, DC10

Bring a fallen ally back to life (requires relative safety).  
_Life flickers like a candle, then steadies once more at 1 HP._

<!-- | Miracle Fist   | 9   | Fist Attack Rolls at Advantage. +1 Damage |
| Shapeshift     | 8   | Into an animal for a short time           | -->
# Drafting

When Drafting you are presented with two random Skills and select one to keep.

## 1, Roll for Draft Tables

First roll d6 to determine which two tables to draft.

| d6  |                        | d6  |                         |
| --- | ---------------------- | --- | ----------------------- |
| 1   | Strength and Dexterity | 4   | Dexterity and Insight   |
| 2   | Strength and Insight   | 5   | Dexterity and Willpower |
| 3   | Strength and Willpower | 6   | Insight and Willpower   |

## 2. Roll for Skills

Then roll d66 for a Skill from each of the two tables.

<!-- Design note: STR is fightery and defendery. -->

| d6  | d6  | Strength Skills on 1, 2, and 3                                 |
| --- | --- | -------------------------------------------------------------- |
| 1-3 | 1   | Loadbearer - Carry 12 items without Encumberance               |
|     | 2   | Power Strike - Spend STR, +3 melee damage one turn             |
|     | 3   | Trained - +1 melee damage                                      |
|     | 4   | Steady - Spend STR, reroll Ranged Attack                       |
|     | 5   | Flank - DC10 STR, move behind an enemy                         |
|     | 6   | Crush - Target rolls Pocket Down on melee attack rolls of 12   |
| 4-6 | 1   | Guard - When your Pocket is 6, nearby allies gain Defense +1   |
|     | 2   | Reach - When your Pocket is 6, can target melee attacks        |
|     | 3   | Brace - When your Pocket is 6, Damage Reduction -1             |
|     | 4   | Big Damage - When Damage Gambit, deal +3 damage to the target  |
|     | 5   | Big Cleave - When Damage Gambit, deal +1 to the nearby enemies |
|     | 6   | Fighter - When rolling STR, the first roll is at Advantage     |

<!-- Design note: the goal for DEX is tricky. This is thief stuff and preparedness stuff. -->

| d6  | d6  | Dexterity Skills on 1, 4, 5                                       |
| --- | --- | ----------------------------------------------------------------- |
| 1-3 | 1   | Sneak - Roll Sneak Moves at Advantage                             |
|     | 2   | Ambush - When Unnoticed, roll Attacks at Advantage                |
|     | 3   | Backstab - When Unnoticed, +d6\* Critical Hit damage              |
|     | 4   | Feint - Spend DEX, reroll Edged or Piercing Melee Attack          |
|     | 5   | Aim - Spend DEX, Ranged Attack Range +1                           |
|     | 6   | Volley - Ranged Attack Rolls at 12, gain an Action                |
| 4-6 | 1   | Quickdraw - Initiative Rolls +1                                   |
|     | 2   | Dash - Once each turn mark Dex to gain 1 Move                     |
|     | 3   | Balance - When starting a turn with Pocket 1, you can roll Pocket |
|     | 4   | Press - Spend 2 Control Gambit effects to gain an Action          |
|     | 5   | Reflex - When rolling Pocket, the first roll is at Advantage      |
|     | 6   | Edge - When rolling DEX, the first roll is at Advantage           |

\clearpage

<!-- Design note: the goal for INS is versatility and planning -->

| d6  | d6  | Insight Skills on 2, 4, 6                                         |
| --- | --- | ----------------------------------------------------------------- |
| 1-3 | 1   | Spellcraft - Learn a Spell or One spell you know is DC -1         |
|     | 2   | Premonition - When Surprised, DC10 INS to cancel it               |
|     | 3   | Farsight - Spend Action, INS - roll Advantage d6 times            |
|     | 4   | Trivial - DC10 INS to Deduce without marking                      |
|     | 5   | Dark Pact - Take d6 damage to reroll INS                          |
|     | 6   | Eureka - When rolling 12, erase a marked INS                      |
| 4-6 | 1   | Mindread - Spend INS, reroll an Attack                            |
|     | 2   | Field Sense - Spend Action, INS - all allies Pocket Up            |
|     | 3   | Disorient - Spend Action, INS - all enemies Pocket Down           |
|     | 4   | Enemy - Spend Action, INS - target rolls Disadvantage d6 times    |
|     | 5   | Channeler - Learn a Spell or +1 to Magic Rolls for each spent pip |
|     | 6   | Clear Mind - When rolling INS, the first roll is at Advantage     |

<!-- Design note: the goal for WIL is backup and aid. It's either extra long range with regards to time, or it's expensive -->

| d6  | d6  | Willpower Skills on 3, 5, 6                                       |
| --- | --- | ----------------------------------------------------------------- |
| 1-3 | 1   | Turn Undead - DC10 WIL to send away the undead                    |
|     | 2   | Endure - Spend Action, WIL - Full Defend Gambit DC7               |
|     | 3   | Command - Spend Action, WIL - target an ally, they gain an Action |
|     | 4   | Resolve - Spend WIL - reroll a Gambit                             |
|     | 5   | Driven - When rolling 12 on for WIL, erase 1 pip of WIL           |
|     | 6   | Reclaim - When rolling 2, erase d6 pips among STR, DEX, and INS   |
| 4-6 | 1   | Quick Rally - Spend Move, 2 WIL - Rally                           |
|     | 2   | Surge - When Rallying, roll an additional +d6 HP when Rallying    |
|     | 3   | Bolstered - HP gain from Rally is rolled at Advantage             |
|     | 4   | Might - Spend WIL, +d6\* melee damage one turn                    |
|     | 5   | Chosen - Gain at most 1 Guilt at a time                           |
|     | 6   | Anchor - When rolling WIL, the first roll is at Advantage         |

## 3. Keeping Skills

Finally, select one of the two skills to keep.

You can only have 6 Active Skills. If you have more than 6 Skills

- Select 6 to be your Active Skills
- Keep the rest in reserve

You may swap Active Skills when resting.
