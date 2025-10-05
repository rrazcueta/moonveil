import { createContext, useContext, useState } from "react";
import { RandomizeCharacter } from "./CharacterRandomizer";

const roll = () => Math.ceil(Math.random() * 6);

const CharacterSheetContext = createContext(undefined);

export function CharacterSheetProvider({ children }) {
  const [sheet, setSheet] = useState(RandomizeCharacter());

  function updateSheet(updates) {
    setSheet((prev) => ({ ...prev, ...updates }));
  }

  const ctx = {
    sheet,
    setSheet,
    updateSheet,
  };

  return (
    <CharacterSheetContext.Provider value={ctx}>
      {children}
    </CharacterSheetContext.Provider>
  );
}

export function useCharacterSheet() {
  const context = useContext(CharacterSheetContext);
  if (!context) {
    throw new Error(
      "useCharacterSheet must be used within a CharacterSheetProvider"
    );
  }
  return context;
}
