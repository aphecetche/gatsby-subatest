import React from "react"
import Grid from "@material-ui/core/Grid"
import Tooltip from "@material-ui/core/Tooltip"
import Typography from "@material-ui/core/Typography"
import Layout from "components/Layout"

import Antenne from "../assets/svg/antenne.svg"
import Alice from "../assets/svg/alice.svg"
import KM3NeT from "../assets/svg/km3net-line.svg"
import Astate from "../assets/svg/chaine-decroissance-radioactive.svg"
import NvsZ from "../assets/svg/n-vs-z.svg"
import TTbar from "../assets/svg/decroissance-ttbar.svg"
import Lagrangien from "../assets/svg/lagrangien.svg"
import Equation from "../assets/svg/equation.svg"
import Molecule from "../assets/svg/molecule-ose.svg"
import GerbeCosmique from "../assets/svg/gerbe-cosmique.svg"

import ModuleOptique from "../assets/svg/module-optique.svg"
import ReactorAnomaly from "../assets/svg/reactor-anomaly.svg"
import QGP from "../assets/svg/diagramme-phase-qgp.svg"
import FPGA from "../assets/svg/electronique-fpga.svg"
import PhotoElec from "../assets/svg/effect-photoelectrique.svg"
import Bulles from "../assets/svg/trajectoires-chambre-bulles.svg"
import Scintillateur from "../assets/svg/interaction-muon-scintillateur.svg"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {},
  custom: {
    padding: theme.spacing(2),
  },
  drawing: {
    padding: theme.spacing(1),
    width: "100%",
    height: "100%",
    maxHeight: "50vh",
    fill: theme.palette.primary.main,
    "&:hover": {
      fill: theme.palette.secondary.main,
    },
  },
}))

const CustomTooltip = ({ title, text }) => {
  const classes = useStyles()
  return (
    <div className={classes.custom}>
      <Typography color="inherit">{title}</Typography>
      <Typography color="secondary">{text}</Typography>
    </div>
  )
}

const DrawingWithTooltip = React.forwardRef((props, ref) => {
  const classes = useStyles()
  const { component, title, text, ...other } = props
  const Component = component
  return (
    <Tooltip
      arrow
      title={<CustomTooltip title={title} text={text} />}
      arial-label="Détecteur ALICE"
    >
      <div {...other} ref={ref}>
        <Component className={classes.drawing} />
      </div>
    </Tooltip>
  )
})

const HomePage = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Grid container className={classes.root}>
        <Grid item xs={12} sm={4} md={2}>
          <Antenne className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <DrawingWithTooltip
            title="Le détecteur ALICE"
            text="bla bla bla"
            component={Alice}
          />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <KM3NeT className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Astate className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <NvsZ className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <TTbar className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <Lagrangien className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <PhotoElec className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Molecule className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <GerbeCosmique className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <QGP className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <FPGA className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <ModuleOptique className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <ReactorAnomaly className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Equation className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Bulles className={classes.drawing} />
        </Grid>
        <Grid item xs={12} sm={4} md={2}>
          <Scintillateur className={classes.drawing} />
        </Grid>
      </Grid>
    </Layout>
  )
}

export default HomePage
