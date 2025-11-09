---
title: "Moonveil"
subtitle: "Version 1.1"
author: "foodpuzz & lunarsignals"
documentclass: extarticle
geometry: [a5paper, margin=0.5in]
classoption: 9pt
mainfont: "IBM Plex Serif"
header-includes:
  - \usepackage{titlesec}
  - \usepackage{hyperref}
  - \newcommand{\UppercaseSection}[1]{\texorpdfstring{\MakeUppercase{#1}}{#1}}
  - \titleformat{\section}[block]{\normalfont\fontsize{12}{16}\bfseries}{\thesection}{1em}{\UppercaseSection}
  - \titleformat{\subsection}[block]{\normalfont\fontsize{10}{14}\bfseries}{\thesubsection}{1em}{\UppercaseSection}
  - \titleformat{\subsubsection}[block]{\normalfont\fontsize{8}{11}\bfseries}{\thesubsubsection}{1em}{\UppercaseSection}
  - \renewcommand\normalsize{\fontsize{8}{11}\selectfont}
  - \newcommand{\sectionbreak}{\clearpage}
---

\clearpage

> THE MOON IS FALLING TO EARTH, AND IT’S MAKING THINGS WEIRD. MOON SHARDS ARE BLANKETING AREAS WITH STRANGE MAGIC—THE MOONVEIL. SOME OF IT IS HARMLESS, AND SOME OF IT IS ACTUALLY PRETTY COOL, BUT SOME OF IT IS BAD, AND YOU’VE GOTTA DO SOMETHING ABOUT IT.

> YOU’RE IN A CARAVAN OF SEEKERS INVESTIGATING THE MOONVEIL. YOUR VEIL GUIDE WILL TAKE YOU WHERE YOU NEED TO GO.

\clearpage

## What You Need

- 2–6 players as Seekers
- 1 player as The Guide
- A ton of six-sided dice (d6s)
- Pencil, paper, and character sheets

## Who is this for?

MOONVEIL is a tabletop RPG dungeon crawler. It's for people that like swords and magic and dice.

You play as Seekers exploring secrets under the Moonveil. The Guide helps you see what’s there, and the Dice handle whatever’s left to fate.

Core features

- 2d6 Core Resolution
- Dice manipulation
- Ability endurance
- Randomized skill drafting
- Clear, simple choices
- Classless, deadly

Inspired by

- ICRPG, Shadowdark, FIST, Mörk Borg, 2400, Dungeon World, Cairn, DURF
- Dungeon Meshi, Wizardry, Tactics Ogre, Magic the Gathering, Balatro
# Playing The Game

Play cycles between exploration and danger. As you explore, **talk with your Guide** about your intentions. You can attempt anything and automatically succeed at **reasonable or unchallenged actions**. When the outcome is risky, uncertain, or perilous, you must make a **Dice Check** or enter an **Encounter**.

## Dice Checks and Controlling Luck

When you take a significant risk you roll against a 2d6 **Dice Check** (**DC**) set by The Guide. At or over the DC is a success.

But you control your own luck. You have a **Pocket Die** to carry fortune from one roll to the next. And you spend **Ability Points** to push through failures. You can Pocket on any Dice Check, and reroll as long as you have Points.

1. **Pocket** - Swap one of the dice with your Pocket Die
2. **Push** - Spend a point in a relevant Ability to reroll
# Make Your Seeker

You are a Seeker exploring the Moonveil. Curiosity? Glory? Power? That's up to you.

## Abilities, Hit Points, Pocket

Abilities are resources to spend. Spend points from an Ability to retry rolls within that domain, bolster actions, or gamble for effects. They're recovered when you Rally or Rest.

You have four different Abilities:

- **Strength** - fighting and raw power. Each point also grants Hit Points.
- **Dexterity** - speed and precision. Reroll Initiative or Full Defense.
- **Insight** - depth of knowledge. Reroll Magic spells and tactics.
- **Willpower** - your inner drive. Reroll Miracles or Rally to recover HP and abilities.

Assign **[2, 2, 1, 1]** to STR, DEX, INS, and WIL in any order, or roll d6 for a spread:

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

**Evade starts at 4**. Mark the 4 box on your Hit Track with an 'E'. Attacks at or under are **Misses**.

**Defense** is equal to **Evade + Pocket**.

- Mark your Defense by putting your **Pocket die on the box equal to your Defense value**
- Defense **cannot reach or exceed your Limit**. If it would, lower it to **one less than Limit**.
- Attacks under Defense are **Weak Hits** - at or over are **Strong Hits**

**Limit starts at 10**. Mark the 10 box on your Hit Track with an 'L'. Attacks at or over are **Critical Hits**.

Start at **Level 1** and fill in your **Name** and **Portrait**.

\clearpage

## Starting Equipment and Magic

Start with d6 **Coin** and 3 **Dungeon Gear**. Then choose or roll d66 twice for starting gifts.

| d6  | d6  | Type    | Gift                                               |
| --- | --- | ------- | -------------------------------------------------- |
| 1-2 | 1   | Item    | Sword                                              |
|     | 2   |         | Spear                                              |
|     | 3   |         | Hammer                                             |
|     | 4   |         | Bow                                                |
|     | 5   |         | Whip                                               |
|     | 6   |         | A Huge Bomb!                                       |
| 3-4 | 1-2 |         | Helmet                                             |
|     | 3-4 |         | Shield                                             |
|     | 5   |         | Medium Armor                                       |
|     | 6   |         | Cloak                                              |
| 5   | 1-2 | Spell   | **Air Pressure**, **Heavylite**, and **Moonsmell** |
|     | 3-4 |         | **Egress** and **Invisibility**                    |
|     | 5   |         | **Magic Orb**                                      |
|     | 6   |         | **Sleepsand**                                      |
| 6   | 1-3 | Miracle | **Healing Circle**                                 |
|     | 4-6 |         | **Dawn Arm**                                       |

For Items see **The Armory**. For Spells and Miracles see **The Archives**.

## Draft and Choose An Ability

Draft a Skill. See **The Skill Draft**.

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
# The Archives

Magic comes in two forms - **Spells** and **Miracles**. Spells are shaped by **Insight** into the unknown. Miracles are drawn forth by sheer **Willpower**.

## Casting Magic

When you cast a Spell or Miracle, roll 2d6 against its DC:

- Success - Roll ≥ DC – the effect takes place.
- Failure - Roll < DC – the effect fizzles, and you lose it until you Rest.

<!-- ## Spells and Arcane Failure

Each day **The Verge** starts at 4.

If your Spell roll fails at or under The Verge, lose 1 Max HP and increase The Verge +1. -->

## Miracles and Penance

Instead of spending Willpower to reroll a Miracle, you can take on **Guilt**.

- If you have no Guilt, fill 1 Equipment slot with Guilt.
- Otherwise, double the amount you are carrying.

Guilt cannot be discarded. Guilt is removed only by genuine sacrifice, as decided with The Guide.

<!-- # The Archive -->

## Willpower Miracle List

### Dawn Arm, DC10

Touch a weapon. +d6 damage until a miss.

### Healing Circle, DC10

Heal +d6 to area.

### Holy Protection, DC10

All nearby allies gain Evade +1 for d6 rounds.

### Resurrection, DC10

Bring a fallen ally back to life (requires relative safety).

<!-- | Miracle Fist   | 9   | Fist Attack Rolls at Advantage. +1 Damage |
| Shapeshift     | 8   | Into an animal for a short time           | -->

\clearpage

## Insight Spell List

### Air Pressure, DC8

Make the air thick like water.

### Egress, DC9

You and nearby allies escape to safety.

### Heavylight, DC8

Conjure a glowing boulder in your hands.

### Invisibility, DC9

You or something you touch is Unnoticed for d6 rounds.

### Magic Orb, DC10

2d6 area damage.

### Magic Barrier, DC9

Evade +2 to self.

### Moonsmell, DC8

Heightened senses.

### Sleepsand, DC12

Sleep.

<!-- | Eye Spy      | 8   | Conjure a shortlived sprite. See what it sees. |
| Ice Column   | 8   | Conjure a slippery ice structure. Range 1.     |
| Ice Sheet    | 8   | Conjure a slippery surface. Range 1.           |
| Telepathy    | 8   | Extrasensory communication.                    |
| Fire Blast   | 9   | All near take 2d6 damage.                      |
| Hydra        | 10  | Range 1. Summon a flaming serpent.             |
|              |     | Shoots a nearby enemy for 2 damage.            |
|              |     | Each round roll d6, it dies on 1.              | -->
# The Skill Draft

## 1. Roll for Draft Tables

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
|     | 4   | Steady - Can spend STR to reroll Ranged Attack                 |
|     | 5   | Flank - DC10 STR, move behind an enemy                         |
|     | 6   | Crush - Target rolls Pocket Down on melee attack rolls of 12   |
| 4-6 | 1   | Guard - When your Pocket is 6, nearby allies gain Evade +1     |
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
|     | 4   | Feint - Can spend DEX to reroll Edged or Piercing Melee Attacks   |
|     | 5   | Aim - Can spend DEX, Ranged Attack Range +1                       |
|     | 6   | Volley - Ranged Attack Rolls at 12, gain an Action                |
| 4-6 | 1   | Quickdraw - Initiative Rolls +1                                   |
|     | 2   | Dash - Once each turn mark Dex to regain your Move                |
|     | 3   | Balance - When starting a turn with Pocket 1, you can roll Pocket |
|     | 4   | Press - Spend 2 Control Gambit effects to gain an Action          |
|     | 5   | Reflex - When rolling Pocket, the first roll is at Advantage      |
|     | 6   | Edge - When rolling DEX, the first roll is at Advantage           |

\clearpage

<!-- Design note: the goal for INS is versatility and planning -->

| d6  | d6  | Insight Skills on 2, 4, 6                                                     |
| --- | --- | ----------------------------------------------------------------------------- |
| 1-3 | 1   | Spellcraft - Learn a Spell or One spell you know is DC -1                     |
|     | 2   | Premonition - When enemies notice you, DC10 INS to notice them first          |
|     | 3   | Farsight - Spend Action, INS - roll Advantage d6 times                        |
|     | 4   | Trivial - DC10 INS to Deduce without marking                                  |
|     | 5   | Dark Pact - Take d6 damage to reroll INS                                      |
|     | 6   | Eureka - When rolling 12, erase a marked INS                                  |
| 4-6 | 1   | Mindread - Can spend INS to reroll an Attack                                  |
|     | 2   | Field Sense - Spend Action, INS - all allies Pocket Up                        |
|     | 3   | Disorient - Spend Action, INS - all enemies Pocket Down                       |
|     | 4   | Enemy - Spend Action, INS - target rolls Disadvantage d6 times                |
|     | 5   | Channeler - Learn a Spell or +1 to Magic Rolls for each spent point this turn |
|     | 6   | Clear Mind - When rolling INS, the first roll is at Advantage                 |

<!-- Design note: the goal for WIL is backup and aid. It's either extra long range with regards to time, or it's expensive -->

| d6  | d6  | Willpower Skills on 3, 5, 6                                       |
| --- | --- | ----------------------------------------------------------------- |
| 1-3 | 1   | Turn Undead - DC10 WIL to send away the undead                    |
|     | 2   | Endure - Spend Action, WIL - Full Defend Gambit DC7               |
|     | 3   | Command - Spend Action, WIL - target an ally, they gain an Action |
|     | 4   | Resolve - Spend WIL - reroll a Gambit                             |
|     | 5   | Driven - When rolling 12 on for WIL, erase 1 point of WIL         |
|     | 6   | Reclaim - When rolling 2, erase d6 points among STR, DEX, and INS |
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

You can swap Active Skills when resting.

<!-- Skill ideas

Spend Action, pocket up

Spend Action, roll pocket, regain Move

 -->
# The Armory

Exploring the Moonveil means hauling gear — and sometimes hauling friends. Track everything you carry in **Equipment**.

- **Slots** - Most items take up 1 slot
  - Smaller items fit multiple to one slot
  - Larger items take up 2 or more slots
- **Extra** - The smallest things like letters, keys, or coins are free to carry

## Dungeon Gear

You can quickly gear up by purchasing **Dungeon Gear**. It is a special item that takes 1 slot. When you use it, it becomes any reasonable adventuring tool like a club or knife, arrows, a tent, rope, torches, rations, etc.

For some kinds of items roll d6 to determine how much is available. Examples:

- If you pull out rope you have d6 x 10 feet of rope
- If you pull out rations you have enough food and drink for d6 Seekers.

If you think you might need something in particular, ask The Guide if they would allow it as Dungeon Gear. If they say no, ask what it would take to acquire it.

## Encumberance

You can carry **Willpower + 6** items without penalty. For each item beyond that, you gain **Encumbrance**. Subtract your Encumbrance from every roll before resolving it.

## Armor

| Equipment | Cost | Description                       |
| --------- | ---: | --------------------------------- |
| Shield    |    4 | When your Pocket is Odd, Evade +1 |
| Helmet    |    2 | Limit +1                          |
| Cloak     |    6 | Can roll Pocket on Moving         |

| Armor  | Cost | Slots | Description                   |
| ------ | ---: | :---: | ----------------------------- |
| Light  |    2 |   1   | Weak Hit Damage Reduction -1  |
| Medium |    5 |   2   | Damage Reduction -1           |
| Heavy  |  >50 |   3   | Damage Reduction -1. Evade +1 |

\clearpage

## Weapons

| Melee              | Cost | Description                          |
| ------------------ | ---: | ------------------------------------ |
| Club, Knife, Staff |    1 | Dungeon Gear                         |
| Dagger             |    2 | Can reroll attacks with Dexterity    |
| Spear              |    4 | Strong Damage +2                     |
| Hammer             |    5 | Critical Damage +d6\*                |
| Axe                |    5 | Minimum Damage 2. Critical Damage +3 |
| Sword              |    6 | Minimum Damage 3                     |

| 2H Melee   | Cost | Slots | Description                             |
| ---------- | ---: | :---: | --------------------------------------- |
| Great Club |    8 |   2   | Critical Damage +2d6\*                  |
| Pike       |    9 |   2   | Strong Damage +6                        |
| Great Axe  |   10 |   2   | Minimum Damage 3. Critical Damage +d6\* |
| Halberd    |   10 |   2   | Strong Damage +2. Critical Damage +d6\* |
| Greatsword |    9 |   2   | Minimum Damage 3. Strong Damage +2      |

| Ranged   | Cost | Range | Description                                                    |
| -------- | ---: | :---: | -------------------------------------------------------------- |
| Whip     |    3 |   0   | Target rolls Pocket Down on any hit                            |
| Bow      |    2 |   2   |                                                                |
| Longbow  |    5 |   2   | Critical Damage +d6\*. When Range is 0, Attack at Disadvantage |
| Crossbow |    8 |   1   | Strong Damage +2. Spend Move to Reload                         |

## Et Cetera

| Special       | Cost | Description                                         |
| ------------- | ---- | --------------------------------------------------- |
| Bomb          | 5    | Throw Range 1. 1 Round to detonate. d6 area damage  |
| A Huge Bomb!  | >25  | Throw Range 1. 1 Round to detonate. 6d6 area damage |
| Caltrops      | 1    | Pocket down to traverse or d6/2 damage              |
| Oil           | 1    | Pocket Down to traverse. Fire is d6/2 damage        |
| Arrows, Bolts | 1    | Dungeon Gear                                        |

<!-- | Quiver or Cache |    1 |       |       | Can be found in Dungeon Gear     |
|                 |      |       |       | Empties out when rolling under 3 |
| Heavy Crossbow  |   10 |   2   |   1   | Strong Damage +3                 |
|                 |      |       |       | Spend Action to Reload.          |
| Longbow         |    3 |   3   |   1   | Critical Damage +d6\*            |
|                 |      |       |       | Roll Disadvantage against Near.  |
|                 |      |       |       | Spend Action and Move to shoot.  |
| Throwing Knife  |    2 |   1   |  4:1  | Melee Minimum Damage 2           |
| Javelin         |    2 |   1   |  2:1  | Melee Strong Damage +1           |
| Throwing Axe    |    3 |   1   |   1   | Melee Critical Damage +d6/2      | -->
# Rest & Growth

In a safe space, share a meal and spend 8 hours to recover.

- **Determine HP** - Roll a number of d6 equal to your Level, then add (3 × Strength). You can set your HP to this total.
- Recover Ability Points, Spells, Miracles, and lost HP
- Select Active Skills
- Roll Pocket

## Field Record

While resting you can make a **Field Record** — a note, sketch, meal, or other impression of your experience. **Spend a resource** such as Dungeon Gear and

- Describe the intent of your record to the table
- Roll DC7 Insight to see what takes hold

Examples:

- Around the campfire you recount your fight with the giant spider. You use a Dungeon Gear as a prop - a **Net**. You roll 5 tumbling to the ground, caught in your own net.
- You take out your journal to draw mushrooms you found. You roll 10 - the drawing captures details only an expert would see. Back in town a mycologist recognizes your work and offers to bring you along on her next outing.

Successful or not, take note. The Guide is watching, and your records tend to inform your future.

## Level Up

If you reached a milestone

- Level +1
- Draft a new Skill.
- +1 in any Ability Point

# Rolls & Death

## Advantage and Disadvantage Rolls

In Advantage roll an extra die, remove the worst. In Disadvantage roll an extra die, lose the best.

## Pocket Rolls

Rolling Pocket is an effect. Sometimes it's chosen, and other times it's forced. You can spend Dexterity to reroll any Pocket roll.

- **Pocket**: set your Pocket to d6.
- **Pocket Up**: roll d6 and compare to your Pocket. Take the bigger value.
- **Pocket Down**: roll d6 and compare to your Pocket. Take the smaller value.

## Exploding Rolls

Rolls denoted by an asterisk are exploding rolls. Reroll these rolls on 6, adding all the dice rolled this way.

## Death

At 0 HP you are dying. Without safety and sustained care you are dead.
# Encounters

In a clash of steel or a sprung trap - each moment is a test. You're rolling dice, swapping your Pocket, and spending Ability Points. When you hold the advantage, strike!

The Guide starts an encounter by setting the scene and

- Identifies the known sources of danger - enemies, sprung traps, environmental hazards
- Describes the area in terms of movement distances, zones, and movement hazards
- Alerts to any obvious interactive elements like ropes, pits, braziers, barricades

## Initiative

Encounters are run in rounds. Start each round with a d6 **Initiative** roll to determine when you can act. On a 4–6 you can **Open** the round acting before The Guide; on a 1–3 you have to **Close** the round acting after The Guide. Reroll by marking Dexterity.

- **Open**: if you rolled 4-6 take you can take your turn first
- **Guide**:
  - Take enemy turns
  - Trigger world events
- **Close**: if you have yet to take your turn, take it here

On your turn, take a **Move** and an **Action** in any order alongside other Seekers taking their turns.
\clearpage

## Movement

Moves change your location, your relative position, or help you regain your footing.

### Move Options

When you take a Move, choose from one of the following or anything else you could easily attempt in a moment:

- Travel - Spend Move to travel to an adjacent area.
- Reposition - Spend Move to reposition yourself relative to other things in the same area.
- Footing - Spend Move to roll Pocket.
- Quick - Spend Action to regain your Move.

### Obstacles

If you need to navigate carefully your Guide will require you to **Pocket Down**. Examples:

- Traversal uphill or up stairs
- Wading through deep water
- Navigating through allies in a cramped space
- Avoiding a trap or crossing a slick surface

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

Then roll 2d6 and compare both dice against the target’s **Evade**, **Defense**, and **Limit** to determine the attack tier and damage.

| Thresholds | Tier             | Damage            | Strong | Critical |
| ---------- | ---------------- | ----------------- | :----: | :------: |
| ≤ Evade    | **Miss**         | None              |        |          |
| < Defense  | **Weak Hit**     | 1                 |        |          |
| ≥ Defense  | **Strong Hit**   | Smaller Die Value |   X    |          |
| ≥ Limit    | **Critical Hit** | Bigger Die Value  |   X    |    X     |

### Deduction

Mark 1 Insight and work with The Guide to reveal or create useful information about the challenge at hand. Identify a previously unknown Advantage over a challenge or enemy, or remove a Disadvantage affecting the Team.

Examples:

- Reveal hints or solutions to an encounter, puzzle, or trap
- Gather a battlefield advantage, a structural weakness, or an escape
- Identify enemy behaviors, inclinations, or weakspots

If you believe the information provides no meaningful benefit, inform The Guide, remove it from the fiction, and refund the cost.

### Rally

Spend an Action and mark 1 Willpower to

- Erase marked points in Strength, Dexterity, and Insight
- Restore 1d6 Hit Points
- Pocket Up
\clearpage

## Gambits

Make wagers for great effect.

### Damage

Before a melee attack if you have at least 1 point of Strength left to mark.

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

Before a ranged attack if you have at least 1 point of Dexterity to mark.

- Deal double damage or the target rolls Pocket Down
- If your attack roll is less than the target Limit, mark all your Dexterity

### Full Defend

After being hit if you have at least 1 point of Dexterity to mark.

- Roll DC10 Dexterity. On success, negate all damage and effects.
- On failure, take full damage, and mark all your Dexterity.
