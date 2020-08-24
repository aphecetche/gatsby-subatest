import React from "react"
import { IconButton } from "@material-ui/core"
import { Menu as MenuIcon } from "@material-ui/icons"

const Hamburger = () => {
  return (
    <IconButton edge="start" color="inherit" aria-label="menu">
      <MenuIcon color="primary" />
    </IconButton>
  )
}

export default Hamburger
