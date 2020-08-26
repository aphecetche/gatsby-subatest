import React from "react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    background: theme.palette.primary.dark,
    color: theme.palette.background.default,
  },
}))
const Footer = () => {
  const classes = useStyles()
  return <footer className={classes.root}>© {new Date().getFullYear()}</footer>
}

export default Footer
