import GlobalStyles from "./global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Notes from "./components/notes";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Notes />
      </>
    </ThemeProvider>
  );
}

export default App;
