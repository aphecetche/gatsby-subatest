import React, { useContext, useState } from "react"
import CssBaseline from "@material-ui/core/CssBaseline"
import Viewport from "gatsby-theme-material-ui-top-layout/src/components/viewport"
import { ThemeProvider } from "@material-ui/styles"
import ThemeContext from "./theme-context"
import PropTypes from "prop-types"
import createTheme from "./create-themes"
import { createMuiTheme } from "@material-ui/core"
import createPalette from "./create-palette"

const themes = {
  dark: createMuiTheme(createTheme(createMuiTheme(createPalette("dark")))),
  light: createMuiTheme(createTheme(createMuiTheme(createPalette("light")))),
}

const ThemedLayout = ({ children }) => {
  const context = useContext(ThemeContext)
  const { color } = context
  const theme = themes[color]
  return (
    <>
      <Viewport />
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {children}
      </ThemeProvider>
    </>
  )
}

ThemedLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

const getInitialColorMode = () => {
  // see if user has already explicitely chosen the color
  // if they have, let's use it
  const hasWindow = typeof window !== "undefined"
  const color = hasWindow
    ? window.localStorage.getItem("color-mode")
    : undefined
  const valid = color === "dark" || color === "light"
  if (valid) {
    return color
  }
  // otherwise check the media query
  const mql = hasWindow
    ? window.matchMedia("(prefers-color-scheme: dark)")
    : undefined
  if (mql) {
    return mql.matches ? "light" : "dark"
  }
  return color ? color : "light"
}

export default function TopLayout({ children }) {
  const startColor = getInitialColorMode()
  const [color, setColor] = useState(startColor)
  return (
    <ThemeContext.Provider
      value={{
        color,
        toggle: (color) => {
          const newColor = color === "dark" ? "light" : "dark"
          setColor(newColor)
          window.localStorage.setItem("color-mode", newColor)
        },
      }}
    >
      <ThemedLayout>{children}</ThemedLayout>
    </ThemeContext.Provider>
  )
}

TopLayout.propTypes = {
  children: PropTypes.node.isRequired,
}
