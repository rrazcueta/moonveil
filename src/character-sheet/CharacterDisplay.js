import { useState } from "react";
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

function CharacterDisplay() {
  const { sheet, updateSheet } = useCharacterSheet();
  const [tab, setTab] = useState("system"); // "system" | "ability" | "actions"
  const [dice, setDice] = useState(null);

  // --- Save & Load ---
  function saveCharacter() {
    try {
      localStorage.setItem("moonveil-character", JSON.stringify(sheet));
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
  }

  function roll2d6() {
    const a = roll();
    const b = roll();
    setDice([Math.min(a, b), Math.max(a, b)]);
  }

  function swapLow() {
    if (!dice) return;
    const oldPocket = sheet.pocket;
    const low = dice[0];
    updateSheet({ pocket: low });
    setDice([Math.min(oldPocket, dice[1]), Math.max(oldPocket, dice[1])]);
  }

  function swapHigh() {
    if (!dice) return;
    const oldPocket = sheet.pocket;
    const high = dice[1];
    updateSheet({ pocket: high });
    setDice([Math.min(oldPocket, dice[0]), Math.max(oldPocket, dice[0])]);
  }

  function markAbility(ability) {
    return () => {
      if (Number(sheet[ability]) > 0) {
        roll2d6();
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
  }

  function levelUp() {
    const newMaxHP = Math.max(
      roll(sheet.level + 1) + sheet.str * 3,
      sheet.maxHp
    );

    updateSheet({
      level: sheet.level + 1,
      hp: newMaxHP,
      maxHp: newMaxHP,
    });
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
        🎲 Rolling
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
            <button onClick={rally} style={{ marginRight: "0.5em" }}>
              🚩 Rally
            </button>
            <button onClick={rest} style={{ marginRight: "0.5em" }}>
              🏕️ Rest
            </button>
            <button onClick={levelUp} style={{ marginRight: "0.5em" }}>
              🆙 Level Up
            </button>
          </>
        );
      case "rolling":
        return (
          <>
            <button
              onClick={roll2d6}
              style={{ marginRight: "0.5em" }}
              disabled={!!dice}
            >
              🎲 Roll
            </button>
            <button
              onClick={swapLow}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🎲 Swap Low
            </button>
            <button
              onClick={swapHigh}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🎲 Swap High
            </button>
            <button
              onClick={markAbility("str")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🗡️ Strength
            </button>
            <button
              onClick={markAbility("dex")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🏹 Dexterity
            </button>
            <button
              onClick={markAbility("ins")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🧠 Insight
            </button>
            <button
              onClick={markAbility("wil")}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🔥 Willpower
            </button>
            <button
              onClick={() => {
                setDice(null);
              }}
              style={{ marginRight: "0.5em" }}
              disabled={!dice}
            >
              🎲 Confirm
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
      {dice && dice.length === 2 ? (
        <h1>
          Pocket {sheet.pocket} and Rolled [{dice.join(", ")}] for total{" "}
          {dice[0] + dice[1]}
        </h1>
      ) : (
        <></>
      )}

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
          <span style={{ color: "white" }}>
            {" "}
            <NamedEditableField propertyName="evade" />
          </span>
        </span>
        ,{" "}
        <span title="Defense = Evade + Pocket">
          Defense
          <span style={{ color: "yellow" }}>
            {" "}
            {Math.min(9, 5 + Number(sheet.pocket))}
          </span>
        </span>
        ,{" "}
        <span>
          Limit
          <span style={{ color: "red" }}>
            {" "}
            <NamedEditableField propertyName="limit" />
          </span>
        </span>
      </p>
      <p>
        Ability Points: {Ability("Strength")}, {Ability("Dexterity")},{" "}
        {Ability("Insight")}, {Ability("Willpower")}
      </p>
      <h3>Backpack & Equipment</h3>
      <ItemTracker
        value={sheet.backpack}
        onChange={(v) => updateSheet({ backpack: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        max={6 + Number(sheet.maxWil)}
        element={"Slot"}
        pastTense={"filled"}
      />
      <ItemTracker
        value={sheet.free}
        onChange={(v) => updateSheet({ free: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        element={"Freebie"}
        pastTense={"carried"}
      />
      <h3>Magic & Skills</h3>
      <ItemTracker
        value={sheet.magicAndSkills}
        onChange={(v) => updateSheet({ magicAndSkills: v })}
        lines={1}
        style={{ color: "lightyellow" }}
        element={"Feat"}
        pastTense={"known"}
      />
    </div>
  );
}

export default CharacterDisplay;
