import { createMuiTheme } from "@material-ui/core/styles";
import { theme } from "./theme";

const palette = {
  primary: { main: theme.color.primary },
  secondary: { main: theme.color.secondary }
};

export const muiTheme = createMuiTheme({ palette });
