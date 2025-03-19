import { createTheme, ThemeProvider } from "@mui/material";
import "./App.css";
import { CharacterSheet } from "./components/CharacterSheet";

const darkTheme = createTheme({
  palette: {
    mode: "dark"
  }
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CharacterSheet />
    </ThemeProvider>
  );
}

export default App;
