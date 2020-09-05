import React from "react"
import { makeStyles, useTheme } from "@material-ui/core/styles"

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
  },
}))

const ColorPatch = ({ color }) => {
  const st = {
    background: color,
    height: "24px",
    width: "24px",
  }
  return <div style={st} />
}

const DebugPalette = () => {
  const classes = useStyles()
  const theme = useTheme()
  return (
    <div className={classes.root}>
      <ColorPatch color={theme.palette.primary.main} />
      <ColorPatch color={theme.palette.primary.light} />
      <ColorPatch color={theme.palette.primary.dark} />
      <ColorPatch color={theme.palette.secondary.main} />
      <ColorPatch color={theme.palette.secondary.light} />
      <ColorPatch color={theme.palette.secondary.dark} />
    </div>
  )
}

export default DebugPalette
