import { createTheme } from "@mui/material";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const themeDark = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff0",
      "100": "#d00",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#f00",
          }),
        }),
      },
    },
  },
});

export const themeLight = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#ff0",
      "100": "#d00",
    },
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiAlert: {
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.severity === "info" && {
            backgroundColor: "#f00",
          }),
        }),
      },
    },
  },
});
