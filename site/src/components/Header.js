import DebugPalette from "./DebugPalette"
import Logo from "./Logo"
import { PrimaryNavigation, SecondaryNavigation } from "gatsby-theme-nav"
import React, { useState } from "react"
import ToggleDarkMode from "./ToggleDarkMode"
import nav from "./navigation.json"
import nav_en from "./navigation.en.json"
import { AppBar, Toolbar } from "@material-ui/core"
import { makeStyles, useTheme } from "@material-ui/core/styles"
import { usePageContext } from "gatsby-theme-intl"
import DevOnly from "components/DevOnly"

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "row",
  },
  dev: {
    display: "flex",
    flexDirection: "row",
  },
  toolbar: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
}))

const Header = () => {
  const { language } = usePageContext()
  const [active, setActive] = useState("")
  const classes = useStyles()
  const data = language !== "fr" ? nav_en : nav
  const primary = data.map((x) => {
    return {
      label: x.title,
      to: x.to,
      hasSecondary: x.groups && x.groups.length,
    }
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
          <DevOnly className={classes.dev}>
            <DebugPalette />
          </DevOnly>
          <ToggleDarkMode />
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

export default Header
