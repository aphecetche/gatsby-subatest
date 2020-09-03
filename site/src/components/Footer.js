import React from "react"
import { makeStyles } from "@material-ui/core"
import Paper from "@material-ui/core/Paper"
import LabAddress from "./LabAddress"
import BottomNavigation from "gatsby-theme-nav/src/components/BottomNavigation"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2, 0, 0, 0),
    padding: theme.spacing(2, 0, 0, 0),
  },
}))
const Footer = () => {
  const classes = useStyles()
  return (
    <Paper elevation={3} className={classes.root}>
      <footer>
        <BottomNavigation />
        <LabAddress />
      </footer>
    </Paper>
  )
}

export default Footer
