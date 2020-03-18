import React from "react";
import "./App.css";

import { ThemeProvider, Checkbox } from "@material-ui/core";
import { muiTheme } from "./theme/mui-theme";
import { LettersNewPage } from "./components/LettersNewPage/LettersNewPage";
import { BrowserRouter as Router, Switch, Route, useLocation } from "react-router-dom";
import { AppFrame } from "./components/AppFrame/AppFrame";
import { HomePage } from "./components/HomePage/HomePage";
import { LettersListPage } from "./components/LettersListPage/LettersListPage";

function App() {
  return (
    <Router>
      <ThemeProvider theme={muiTheme}>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>

          <Route>
            <AppFrame>
              <Switch>
                <Route exact path="/cartas">
                  <LettersListPage />
                </Route>
                <Route path="/cartas/new">
                  <LettersNewPage />
                </Route>
              </Switch>
            </AppFrame>
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;