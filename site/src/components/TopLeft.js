import React from "react"
import Img from "gatsby-image"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    width: "25%",
    float: "left",
    minWidth: "200px",
    marginRight: theme.spacing(1),
  },
}))

const TopLeft = ({ fluid }) => {
  const classes = useStyles()
  return <Img className={classes.root} fluid={fluid} />
}

export default TopLeft
