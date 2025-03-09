import './App.css'
import { CharacterSheet } from './components/CharacterSheet'
import { connectToDatabase } from './services/mongoService';


connectToDatabase();

function App() {
  return <CharacterSheet />;
}

export default App
