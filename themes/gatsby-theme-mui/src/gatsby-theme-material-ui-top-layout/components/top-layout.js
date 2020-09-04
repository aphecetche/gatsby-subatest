import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Viewport from "gatsby-theme-material-ui-top-layout/src/components/viewport";
import { ThemeProvider } from "@material-ui/styles";
import ThemeContext from "./theme-context";

import createTheme from "./create-themes";
import { createMuiTheme } from "@material-ui/core";

const themes = {
  dark: createMuiTheme(createTheme("dark")),
  light: createMuiTheme(createTheme("light")),
};

const ThemedLayout = ({ children }) => {
  const context = useContext(ThemeContext);
  const { color } = context;
  const theme = themes[color];
  return (
    <>
      <Viewport />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
};

const getInitialColorMode = () => {
  // see if user has already explicitely chosen the color
  // if they have, let's use it
  const color = window.localStorage.getItem("color-mode");
  const valid = color === "dark" || color === "light";
  if (valid) {
    console.log("color from localStorage");
    return color;
  }
  // otherwise check the media query
  const mql = window.matchMedia("(prefers-color-scheme: dark)");
  if (mql) {
    console.log("color from mediaQuery");
    return mql.matches ? "dark" : "light";
  }
  console.log("color from default");
  return color ? color : "dark";
};

export default function TopLayout({ children }) {
  const startColor = getInitialColorMode();
  const [color, setColor] = useState(startColor);
  return (
    <ThemeContext.Provider
      value={{
        color,
        toggle: (color) => {
          const newColor = color === "dark" ? "light" : "dark";
          setColor(newColor);
          window.localStorage.setItem("color-mode", newColor);
        },
      }}
    >
      <ThemedLayout>{children}</ThemedLayout>
    </ThemeContext.Provider>
  );
}
