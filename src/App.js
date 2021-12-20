import GlobalStyles from "./global";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./theme";
import Notes from "./components/notes";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "Eat pizzaa",
    },
  ]);

  const on_add = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;
    const newTodos = { id, ...task };
    setTodos([...todos, newTodos]);
  };

  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <Notes todos={todos} on_add={on_add} />
      </>
    </ThemeProvider>
  );
}

export default App;
