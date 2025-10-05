import "./App.css";

import { CharacterSheetProvider } from "./character-sheet/CharacterSheet";
import CharacterDisplay from "./character-sheet/CharacterDisplay";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Wrap with provider so all children can use the sheet */}
        <CharacterSheetProvider>
          <CharacterDisplay />
        </CharacterSheetProvider>
      </header>
    </div>
  );
}

export default App;
