import PropTypes from "prop-types"
import React from "react"
import Logo from "./logo"
import Navigation from "./navigation"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import Hamburger from "./hamburger"

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.background.paper,
  },
  toolbar: {
    justifyContent: "space-between",
  },
}))

const Header = () => {
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("xs"))
  return (
    <>
      <AppBar className={classes.main}>
        <Toolbar className={classes.toolbar}>
          <Logo />
          <Navigation />
          {small && <Hamburger />}
        </Toolbar>
      </AppBar>
      <p style={{ marginTop: "10rem" }}>Small is : {JSON.stringify(small)}</p>
    </>
  )
}

Header.propTypes = {}

Header.defaultProps = {}

export default Header
