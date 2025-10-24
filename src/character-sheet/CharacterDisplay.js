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

function CharacterDisplay() {
  const { sheet, updateSheet } = useCharacterSheet();
  const [tab, setTab] = useState();
  const [dice, setDice] = useState(null);
  const [message, setMessage] = useState("...");
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

  // function rolld6() {
  //   const a = roll();
  //   setDice([a]);
  //   setMessage(`Roll ${a}`);
  // }

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

    setTab("action");
  }

  // function swapLow() {
  //   if (!dice || dice.length != 2) return;

  //   const oldPocket = Number(sheet.pocket);
  //   updateSheet({ pocket: dice[0] });
  //   const newDice = [oldPocket, dice[1]].sort((a, b) => a - b);
  //   setDice(newDice);

  //   setMessage(
  //     `Swap to [${newDice.join(", ")}] for ${newDice.reduce(
  //       (total, n) => total + n
  //     )}`
  //   );
  // }

  // function swapHigh() {
  //   if (!dice || dice.length != 2) return;

  //   const oldPocket = Number(sheet.pocket);
  //   updateSheet({ pocket: dice[1] });
  //   const newDice = [oldPocket, dice[0]].sort((a, b) => a - b);
  //   setDice(newDice);

  //   setMessage(
  //     `Swap to [${newDice.join(", ")}] for ${newDice.reduce(
  //       (total, n) => total + n
  //     )}`
  //   );
  // }

  function markAbility(ability) {
    return () => {
      if (Number(sheet[ability]) > 0) {
        reroll(ability.toUpperCase());
        updateSheet({ [ability]: sheet[ability] - 1 });
      } else {
        setMessage(
          `Insufficient ${ability.toUpperCase()} to mark. [${dice.join(", ")}]`
        );
      }
    };
  }

  function actionRoll() {
    setTab("action");

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

  function confirmActionRoll() {
    setTab("roll");
    setMessage(`Rolled ${dice.reduce((total, n) => total + n)}`);
  }

  function rally() {
    if (Number(sheet.wil) > 0) {
      const newHp = Math.min(sheet.hp + roll(), sheet.maxHp);

      updateSheet({
        hp: newHp,
        str: sheet.maxStr,
        dex: sheet.maxDex,
        ins: sheet.maxIns,
        wil: sheet.wil - 1,
      });
      setMessage(`Recovered Abilities and ${newHp - sheet.hp} HP`);
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

  function CurrentMenu() {
    switch (tab) {
      case "system":
        return <SystemMenu />;
      case "recover":
        return <RecoverMenu />;
      case "level":
        return <LevelUpMenu />;
      case "roll":
        return <RollMenu />;
      case "pocket":
        return <PocketMenu />;
      case "pocket confirm":
        return <PocketConfirmMenu />;
      case "action":
        return <ActionMenu />;
      case "action confirm":
        return <ActionConfirmMenu />;
      default:
        return <TopMenu />;
    }
  }

  function TopMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("system")}
        >
          System
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("recover")}
        >
          Recover
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={() => setTab("roll")}>
          Roll
        </button>
      </div>
    );
  }

  function SystemMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={() => setTab()}>
          Back
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={saveCharacter}>
          Save
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={loadCharacter}>
          Load
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={randomizeCharacter}>
          Randomize
        </button>
      </div>
    );
  }

  function RecoverMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={() => setTab()}>
          Back
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={rally}>
          Rally
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={rest}>
          Rest
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("level")}
        >
          Level Up
        </button>
      </div>
    );
  }

  function LevelUpMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("recover")}
        >
          Back
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => {
            levelUp("str");
          }}
        >
          Level Strength
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => {
            levelUp("dex");
          }}
        >
          Level Dexterity
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => {
            levelUp("ins");
          }}
        >
          Level Insight
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => {
            levelUp("wil");
          }}
        >
          Level Willpower
        </button>
      </div>
    );
  }

  function RollMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={() => setTab()}>
          Back
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={actionRoll}>
          Action Roll
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket")}
        >
          Pocket Roll
        </button>
        {/* <button style={{ marginRight: "0.5em" }} onClick={() => setTab("test")}>
          Test Roll
        </button> */}
      </div>
    );
  }

  function PocketMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={() => setTab("roll")}>
          Back
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket confirm")}
        >
          Roll Pocket
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket confirm")}
        >
          Pocket Down
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket confirm")}
        >
          Pocket Up
        </button>
      </div>
    );
  }

  function PocketConfirmMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket")}
        >
          Mark Dex
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("pocket")}
        >
          Confirm
        </button>
      </div>
    );
  }

  function ActionMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={() => {}}>
          Swap Low
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={() => {}}>
          Swap High
        </button>
        <button
          style={{ marginRight: "0.5em" }}
          onClick={() => setTab("action confirm")}
        >
          Confirm Pocket
        </button>
      </div>
    );
  }

  function ActionConfirmMenu() {
    return (
      <div style={{ marginBottom: "1em" }}>
        <button style={{ marginRight: "0.5em" }} onClick={markAbility("str")}>
          Mark Strength
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={markAbility("dex")}>
          Mark Dexterity
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={markAbility("ins")}>
          Mark Insight
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={markAbility("wil")}>
          Mark Willpower
        </button>
        <button style={{ marginRight: "0.5em" }} onClick={confirmActionRoll}>
          Confirm Roll
        </button>
      </div>
    );
  }

  // "top" | "system" | "recover" | "level" | "roll" | "pocket" | "pocket confirm" | "action" | "action confirm"

  return (
    <div align="left">
      <div>Debug {tab}</div>
      <CurrentMenu />
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
