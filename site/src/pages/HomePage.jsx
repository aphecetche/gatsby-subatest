import React from "react"
import Antenne from "../assets/svg/antenne.svg"
import Alice from "../assets/svg/alice.svg"
import KM3NeT from "../assets/svg/km3net-line.svg"
import Astate from "../assets/svg/chaine-decroissance-radioactive.svg"
import NvsZ from "../assets/svg/n-vs-z.svg"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "150px",
    maxHeight: "150px",
    fill: theme.palette.primary.main,
    "&:hover": {
      fill: theme.palette.secondary.main,
    },
  },
}))

const HomePage = () => {
  const classes = useStyles()
  return (
    <div>
      <h1>Home Page</h1>
      <Antenne width="100px" className={classes.root} />
      <Alice className={classes.root} />
      <KM3NeT className={classes.root} />
      <Astate className={classes.root} />
      <NvsZ className={classes.root} />
    </div>
  )
}

export default HomePage
