import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { ThemeProvider } from "@material-ui/styles";
import Viewport from "gatsby-theme-material-ui-top-layout/src/components/viewport";
import { createMuiTheme } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";

export default function TopLayout({ children, theme }) {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const utheme = React.useMemo(
    () =>
      createMuiTheme({
        ...theme,
        palette: { type: prefersDarkMode ? "dark" : "light", ...theme.palette },
      }),
    [theme, prefersDarkMode]
  );

  return (
    <>
      <Viewport />
      <ThemeProvider theme={utheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  );
}
