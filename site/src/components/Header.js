import PropTypes from "prop-types"
import React, { useState } from "react"
import Logo from "./logo"
import PrimaryNavigation from "gatsby-theme-nav/src/components/PrimaryNavigation"
import SecondaryNavigation from "gatsby-theme-nav/src/components/SecondaryNavigation"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { useMediaQuery } from "@material-ui/core"
import Hamburger from "./hamburger"
import nav from "./navigation.json"

import ToggleDarkMode from "./ToggleDarkMode"

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.background.paper,
    display: "flex",
    flexDirection: "row",
  },
  toolbar: {
    justifyContent: "space-between",
  },
}))

const ColorPatch = ({ color }) => {
  const st = {
    background: color,
    height: "50px",
    width: "50px",
  }
  return <div style={st} />
}

const Header = ({ data = nav }) => {
  const [active, setActive] = useState("")
  const classes = useStyles()
  const theme = useTheme()
  const small = useMediaQuery(theme.breakpoints.down("xs"))
  const primary = data.map((x) => {
    return { label: x.title, to: x.to }
  })

  return (
    <>
      <AppBar className={classes.main} position="static">
        <Toolbar className={classes.toolbar}>
          <Logo />
          <ColorPatch color={theme.palette.primary.main} />
          <ColorPatch color={theme.palette.primary.light} />
          <ColorPatch color={theme.palette.primary.dark} />
          <ColorPatch color={theme.palette.secondary.main} />
          <ColorPatch color={theme.palette.secondary.light} />
          <ColorPatch color={theme.palette.secondary.dark} />
          <PrimaryNavigation
            links={primary}
            active={active}
            setActive={setActive}
          />
          <ToggleDarkMode />
          {small && <Hamburger />}
        </Toolbar>
      </AppBar>
      <SecondaryNavigation
        className={classes.secondary}
        aria-hidden="true"
        data={data}
        active={active}
        setActive={setActive}
      />
    </>
  )
}

Header.propTypes = {
  data: PropTypes.array,
}

export default Header
