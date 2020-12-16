import React from "react"
import { makeStyles, Grid } from "@material-ui/core"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    ...theme.typography.body1,
  },
}))

const MainWithAside = ({ main, aside }) => {
  const classes = useStyles()

  const mainWidth = aside ? 6 : 10
  const asideWidth = 12 - mainWidth

  return (
    <Grid container className={classes.root}>
      <Grid item xs={false} sm={1} />
      <Grid item xs={12} sm={mainWidth} className={classes.main}>
        {main}
      </Grid>
      <Grid item xs={false} sm={1} />
      {asideWidth > 0 && (
        <Grid item xs={12} sm={3}>
          {aside}
        </Grid>
      )}
    </Grid>
  )
}
MainWithAside.propTypes = {
  aside: PropTypes.node,
  main: PropTypes.node,
}
export default MainWithAside
