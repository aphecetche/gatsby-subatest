import React, { useContext } from "react"
import { IconButton } from "@material-ui/core"
import Brightness4Icon from "@material-ui/icons/Brightness4"
import Brightness7Icon from "@material-ui/icons/Brightness7"
import ThemeContext from "gatsby-theme-mui/src/gatsby-theme-material-ui-top-layout/components/theme-context"

const ToggleDarkMode = () => {
  const context = useContext(ThemeContext)
  const { color, toggle } = context
  const dark = color === "dark"
  return (
    <IconButton
      size="small"
      color="primary"
      aria-label="toggle dark/light theme"
      onClick={() => toggle(color)}
    >
      {dark ? <Brightness7Icon /> : <Brightness4Icon />}
    </IconButton>
  )
}

export default ToggleDarkMode
