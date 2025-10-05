import { NamedEditableField } from "./EditableFields";
import { useCharacterSheet } from "./CharacterSheet";

export const Ability = (ability) => {
  const { sheet } = useCharacterSheet();

  const map = {
    Strength: { short: "str", max: "maxStr" },
    Dexterity: { short: "dex", max: "maxDex" },
    Insight: { short: "ins", max: "maxIns" },
    Willpower: { short: "wil", max: "maxWil" },
  };

  const points = sheet[map[ability].short];
  const max = sheet[map[ability].max];

  const perc = max ? points / max : 0;

  let color = "white";
  if (perc < 2 / 3) color = "yellow";
  if (perc <= 0) color = "red";

  return (
    <span>
      {ability}{" "}
      <span style={{ color }}>
        <NamedEditableField {...{ propertyName: map[ability].short }} />/
        <NamedEditableField {...{ propertyName: map[ability].max }} />
      </span>
    </span>
  );
};
