import React from "react";
import "./App.css";

import { ThemeProvider, Checkbox } from "@material-ui/core";
import { theme } from "./theme/theme";
import { LettersNew } from "./pages/LettersNew";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LettersNew></LettersNew>
    </ThemeProvider>
  );
}

export default App;
