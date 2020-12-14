import React from "react"
import Direction from "./direction"
import Physique from "./physique"
import Radiochimie from "./radiochimie"
import ServicesTechniques from "./services-techniques"
import Conseils from "./conseils"
import ChargesDeMission from "./charges-de-mission"
import Grid from "@material-ui/core/Grid"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles(() => ({
  root: {},
}))

const OrgChart = () => {
  const classes = useStyles()
  return (
    <Grid container className={classes.root}>
      <Direction />
      <Physique />
      <Radiochimie />
      <ServicesTechniques />
      <Conseils />
      <ChargesDeMission />
    </Grid>
  )
}

export default OrgChart
