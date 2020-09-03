import React, { useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import Viewport from "gatsby-theme-material-ui-top-layout/src/components/viewport";
import { createMuiTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const primary = {
  light: "#0766ad",
  //dark: "#67B3E5",
  dark: "#85C2E4",
};
const secondary = {
  light: "#98ca34",
  dark: "#CDE59F",
};

const createTheme = (dark) => ({
  props: {
    toto: dark ? "foncé" : "clair",
  },
  typography: {
    fontFamily: "Open Sans",
    fontWeightRegular: "400",
  },
  palette: {
    type: dark,
    background: {},
    primary: {
      main: primary[dark],
    },
    secondary: {
      main: secondary[dark],
    },
    text: {},
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body": {
          height: "100%",
          WebkitFontSmoothing: "auto",
        },
        a: {
          color: primary[dark],
        },
        "#gatsby-focus-wrapper, #___gatsby": {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
  },
});

const themes = {
  dark: createMuiTheme(createTheme("dark")),
  light: createMuiTheme(createTheme("light")),
};

const useMode = () => {
  // const prefersMode = useMediaQuery("(prefers-color-scheme: dark)");
  // const dark = prefersMode ? "dark" : "light";
  // console.log("dark=", dark);
  const [mode, setMode] = useState("dark");
  //const utheme = React.useMemo(() => createMuiTheme(createTheme(themeShade)), [
  return [mode, setMode];
};

export const ThemeContext = React.createContext({});

export default function TopLayout({ children }) {
  const [mode, setMode] = useMode();
  console.log("mode=", mode, "setMode=", setMode);
  console.log(JSON.stringify(themes[mode], null, 4));
  const utheme = themes[mode];
  return (
    <>
      <Viewport />
      <ThemeContext.Provider value={{ current: mode, set: setMode }}>
        <ThemeProvider theme={utheme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  );
}
