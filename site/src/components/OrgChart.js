import React from "react"
import Direction from "./orgchart/Direction"
import Physique from "./orgchart/Physique"
import Radiochimie from "./orgchart/Radiochimie"
import ServicesTechniques from "./orgchart/ServicesTechniques"
import Conseils from "./orgchart/Conseils"
import ChargesDeMission from "./orgchart/ChargesDeMission"
import Grid from "@material-ui/core/Grid"

import { makeStyles } from "@material-ui/core"
const useStyles = makeStyles((theme) => ({
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
