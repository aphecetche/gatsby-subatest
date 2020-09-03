import React, { useContext, useState } from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Viewport from "gatsby-theme-material-ui-top-layout/src/components/viewport";
import { ThemeProvider } from "@material-ui/styles";

import createTheme from "./create-themes";
import { createMuiTheme } from "@material-ui/core";

export const ThemeContext = React.createContext({
  color: "dark",
  setColor: () => {},
});

const themes = {
  dark: createMuiTheme(createTheme("dark")),
  light: createMuiTheme(createTheme("light")),
};

const ThemedLayout = ({ children }) => {
  const context = useContext(ThemeContext);
  console.log("context=", JSON.stringify(context, null, 4));
  const { color } = context;
  console.log("color=", color);
  const theme = themes[color];
  console.log("themeContext.palette=", JSON.stringify(theme.palette, null, 4));
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

export default function TopLayout({ children }) {
  const [color, setColor] = useState("dark");
  return (
    <ThemeContext.Provider
      value={{
        color,
        toggle: (color) => {
          color === "dark" ? setColor("light") : setColor("dark");
        },
      }}
    >
      <ThemedLayout>{children}</ThemedLayout>
    </ThemeContext.Provider>
  );
}
