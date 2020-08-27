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
          <PrimaryNavigation
            links={primary}
            active={active}
            setActive={setActive}
          />
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
