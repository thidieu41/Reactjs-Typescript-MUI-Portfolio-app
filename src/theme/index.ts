import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: `"Poppins", "Arial", sans-serif`,
    fontSize:14
  },
  palette: {
    primary: {
      light: "#4da9b7",
      main: "#1E4167",
      dark: "#004e5a",
      contrastText: "#000",
    },
    secondary: {
      light: "#ff8e8c",
      main: "#ff5a5f",
      dark: "#c62035",
      contrastText: "#fff",
    },
  },
});
