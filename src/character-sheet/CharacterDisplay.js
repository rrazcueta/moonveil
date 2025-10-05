import { useCharacterSheet } from "./CharacterSheet";
import { Ability } from "./Ability";
import { NamedEditableField } from "./EditableFields";
import { ItemTracker } from "./ItemTracker";
import { RandomizeCharacter } from "./CharacterRandomizer";

function CharacterDisplay() {
  const { sheet, updateSheet } = useCharacterSheet();

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

  return (
    <div align="left">
      <div style={{ marginBottom: "1em" }}>
        <button onClick={saveCharacter} style={{ marginRight: "0.5em" }}>
          💾
        </button>
        <button onClick={loadCharacter} style={{ marginRight: "0.5em" }}>
          📂
        </button>
        <button onClick={randomizeCharacter} style={{ marginRight: "0.5em" }}>
          🌀
        </button>
      </div>

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
