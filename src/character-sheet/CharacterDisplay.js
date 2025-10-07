import React, { useState, useMemo } from "react";
import { useCharacterSheet } from "./CharacterSheet";
import { Ability } from "./Ability";
import { NamedEditableField } from "./EditableFields";
import { ItemTracker } from "./ItemTracker";
import { RandomizeCharacter } from "./CharacterRandomizer";

function roll(howMany = 1) {
  return howMany <= 1
    ? Math.ceil(Math.random() * 6)
    : Math.ceil(Math.random() * 6) + roll(howMany - 1);
}

/*

Text

Buttons
Roll d6, Roll 2d6, Roll +d6, Clear

Roll d6, Roll 2d6, Adv, Disadv, Mark Str/Dex/Ins/Wil, Confirm

When Roll 2d6 is clicked then Mark buttons are unlocked

Rolled X.
Rolled [X, Y] for Z.
Rolled [X, Y, Z, ...]. Best A. Worst B.

*/

function CharacterDisplay() {
  const { sheet, updateSheet } = useCharacterSheet();
  const [tab, setTab] = useState("system"); // "system" | "ability" | "actions"
  const [dice, setDice] = useState(null);
  const [message, setMessage] = useState("Nothing rolled");
  const [keywords, setKeywords] = React.useState([]);

  const evade = useMemo(() => {
    const evasiveBonus =
      keywords.includes("evasive") && sheet.pocket % 2 === 0 ? 1 : 0;
    return sheet.evade + evasiveBonus;
  }, [sheet.evade, sheet.pocket, keywords]);

  const limit = useMemo(() => {
    const protectedBonus = keywords.includes("protected") ? 1 : 0;
    return sheet.limit + protectedBonus;
  }, [sheet.limit, keywords]);

  // --- Save & Load ---
  function saveCharacter() {
    try {
      localStorage.setItem("moonveil-character", JSON.stringify(sheet));
      setMessage("Saved");
      alert("Character saved!");
    } catch (err) {
      console.error("Error saving character:", err);
      alert("Failed to save character.");
    }
  }

  function loadCharacter() {
    try {
      const saved = localStorage.getItem("moonveil-character");
      if (saved) {
        updateSheet(JSON.parse(saved));
        setMessage("Loaded");
        alert("Character loaded!");
      } else {
        alert("No saved character found.");
      }
    } catch (err) {
      console.error("Error loading character:", err);
      alert("Failed to load character.");
    }
  }

  function randomizeCharacter() {
    updateSheet(RandomizeCharacter());
    setMessage("New character");
  }

  function rolld6() {
    const a = roll();
    setDice([a]);
    setMessage(`Roll ${a}`);
  }

  function roll2d6() {
    const a = roll();
    const b = roll();
    const ordered = [Math.min(a, b), Math.max(a, b)];
    setDice(ordered);
    setMessage(
      `Roll [${ordered.join(", ")}] for ${ordered.reduce(
        (total, n) => total + n
      )}`
    );
  }

  function reroll(ability) {
    const arr = [];
    for (let i = 0; i < dice.length; i++) arr.push(roll());
    arr.sort((a, b) => a - b);
    setDice(arr);
    setMessage(
      `${ability} reroll to [${arr.join(", ")}] for ${arr.reduce(
        (total, n) => total + n
      )}`
    );
  }

  function swapLow() {
    if (!dice || dice.length != 2) return;

    const oldPocket = Number(sheet.pocket);
    updateSheet({ pocket: dice[0] });
    const newDice = [oldPocket, dice[1]].sort((a, b) => a - b);
    setDice(newDice);

    setMessage(
      `Swap to [${newDice.join(", ")}] for ${newDice.reduce(
        (total, n) => total + n
      )}`
    );
  }

  function swapHigh() {
    if (!dice || dice.length != 2) return;

    const oldPocket = Number(sheet.pocket);
    updateSheet({ pocket: dice[1] });
    const newDice = [oldPocket, dice[0]].sort((a, b) => a - b);
    setDice(newDice);

    setMessage(
      `Swap to [${newDice.join(", ")}] for ${newDice.reduce(
        (total, n) => total + n
      )}`
    );
  }

  function markAbility(ability) {
    return () => {
      if (Number(sheet[ability]) > 0) {
        reroll(ability.toUpperCase());
        updateSheet({ [ability]: sheet[ability] - 1 });
      }
    };
  }

  function rally() {
    if (Number(sheet.wil) > 0) {
      updateSheet({
        str: sheet.maxStr,
        dex: sheet.maxDex,
        ins: sheet.maxIns,
        wil: sheet.wil - 1,
      });
      setMessage("Recovered STR, DEX, INS");
    } else {
      setMessage("Not enough WIL to Rally");
    }
  }

  function rest() {
    const newMaxHP = Math.max(roll(sheet.level) + sheet.str * 3, sheet.maxHp);

    updateSheet({
      str: sheet.maxStr,
      dex: sheet.maxDex,
      ins: sheet.maxIns,
      wil: sheet.maxWil,
      hp: newMaxHP,
      maxHp: newMaxHP,
    });

    setMessage("Recovered all Stats and HP.");
  }

  function levelUp(ability) {
    const newMaxHP = Math.max(
      roll(sheet.level + 1) + sheet.str * 3,
      sheet.maxHp
    );

    const maxMap = {
      str: "maxStr",
      dex: "maxDex",
      ins: "maxIns",
      wil: "maxWil",
    };

    const update = {
      level: Number(sheet.level) + 1,
      hp: Number(newMaxHP),
      maxHp: Number(newMaxHP),
      [ability]: sheet[maxMap[ability]] + 1,
      [maxMap[ability]]: sheet[maxMap[ability]] + 1,
    };

    updateSheet(update);

    setMessage(
      `Level ${update.level}! Max HP ${
        update.maxHp
      }. ${ability.toUpperCase()} +1.`
    );
  }

  const tabButtons = (
    <div style={{ marginBottom: "0em" }}>
      <button
        onClick={() => setTab("system")}
        style={{ marginRight: "0.5em" }}
        disabled={dice}
      >
        🛠️ System
      </button>
      <button
        onClick={() => setTab("recovery")}
        style={{ marginRight: "0.5em" }}
        disabled={dice}
      >
        🔄 Recover
      </button>
      <button
        onClick={() => setTab("rolling")}
        style={{ marginRight: "0.5em" }}
      >
        🎲 Dice
      </button>
    </div>
  );

  const tabContent = () => {
    switch (tab) {
      case "system":
        return (
          <>
            <button onClick={saveCharacter} style={{ marginRight: "0.5em" }}>
              💾 Save
            </button>
            <button onClick={loadCharacter} style={{ marginRight: "0.5em" }}>
              📂 Load
            </button>
            <button
              onClick={randomizeCharacter}
              style={{ marginRight: "0.5em" }}
            >
              🌀 Randomize
            </button>
          </>
        );
      case "recovery":
        return (
          <>
            <button
              onClick={rally}
              style={{ marginRight: "0.5em" }}
              disabled={sheet.wil <= 0}
            >
              🚩 Rally
            </button>
            <button onClick={rest} style={{ marginRight: "0.5em" }}>
              🏕️ Rest
            </button>
            <button
              onClick={() => {
                levelUp("str");
              }}
              style={{ marginRight: "0.5em" }}
            >
              🆙 Level Up STR
            </button>
            <button
              onClick={() => {
                levelUp("dex");
              }}
              style={{ marginRight: "0.5em" }}
            >
              🆙 Level Up DEX
            </button>
            <button
              onClick={() => {
                levelUp("ins");
              }}
              style={{ marginRight: "0.5em" }}
            >
              🆙 Level Up INS
            </button>
            <button
              onClick={() => {
                levelUp("wil");
              }}
              style={{ marginRight: "0.5em" }}
            >
              🆙 Level Up WIL
            </button>
          </>
        );
      case "rolling":
        return (
          <>
            <button
              onClick={rolld6}
              style={{ marginRight: "0.5em" }}
              disabled={dice}
            >
              🎲 Roll d6
            </button>
            <button
              onClick={roll2d6}
              style={{ marginRight: "0.5em" }}
              disabled={dice}
            >
              🎲🎲 Roll 2d6
            </button>
            <button
              onClick={swapLow}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || dice.length != 2}
            >
              ↘️ Swap Low
            </button>
            <button
              onClick={swapHigh}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || dice.length != 2}
            >
              ↗️ Swap High
            </button>
            <button
              onClick={markAbility("str")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || sheet.str <= 0}
            >
              🗡️ Mark STR
            </button>
            <button
              onClick={markAbility("dex")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || sheet.dex <= 0}
            >
              🏹 Mark DEX
            </button>
            <button
              onClick={markAbility("ins")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || sheet.ins <= 0}
            >
              🧠 Mark INS
            </button>
            <button
              onClick={markAbility("wil")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice || sheet.wil <= 0}
            >
              🔥 Mark WIL
            </button>
            <button
              onClick={() => {
                setMessage(`${dice.reduce((total, n) => total + n)} rolled`);
                setDice(null);
              }}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              ✅ Confirm
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div align="left">
      <div style={{ marginBottom: "1em" }}>
        {tabButtons}
        <div style={{ marginBottom: "1em" }}>{tabContent()}</div>
      </div>
      <h1>{message}</h1>
      <h2>
        <NamedEditableField propertyName="name" />,{" "}
        <NamedEditableField propertyName="class" />, Level{" "}
        <NamedEditableField propertyName="level" />, Hit Points{" "}
        <NamedEditableField propertyName="hp" />/
        <NamedEditableField propertyName="maxHp" />, Pocket{" "}
        <NamedEditableField propertyName="pocket" />
      </h2>
      <p>
        Hit Track:{" "}
        <span>
          Evade
          <span style={{ color: "white" }}>{` ${evade}`}</span>
        </span>
        ,{" "}
        <span title="Defense = Evade + Pocket">
          Defense
          <span style={{ color: "yellow" }}>
            {" "}
            {Math.min(9, evade + Number(sheet.pocket))}
          </span>
        </span>
        ,{" "}
        <span>
          Limit
          <span style={{ color: "red" }}>{` ${limit}`}</span>
        </span>
      </p>
      <p>
        Ability Points: {Ability("Strength")}, {Ability("Dexterity")},{" "}
        {Ability("Insight")}, {Ability("Willpower")}
      </p>
      {keywords.length > 0 ? (
        <p>
          Keywords:{" "}
          {keywords
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(", ")}
        </p>
      ) : (
        <></>
      )}
      <h3>Backpack & Equipment</h3>
      <ItemTracker
        value={sheet.backpack}
        onChange={(v) => updateSheet({ backpack: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        max={6 + Number(sheet.maxWil)}
        element={"Slot"}
        pastTense={"filled"}
        onKeywordsChange={setKeywords}
      />
      <ItemTracker
        value={sheet.free}
        onChange={(v) => updateSheet({ free: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        element={"Freebie"}
        pastTense={"carried"}
        showIndex={false}
      />
      <h3>Magic & Skills</h3>
      <ItemTracker
        value={sheet.magicAndSkills}
        onChange={(v) => updateSheet({ magicAndSkills: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        element={"Feat"}
        pastTense={"known"}
        onKeywordsChange={setKeywords}
      />
    </div>
  );
}

export default CharacterDisplay;
