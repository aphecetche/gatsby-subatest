import React, { useState } from "react"
import { Tab } from "@material-ui/core"
import { TabPanel, TabContext, TabList } from "@material-ui/lab"
import { makeStyles } from "@material-ui/core/styles"
import Events from "components/Events"
import Jobs from "components/Jobs"
import Seminars from "components/Seminars"
import useMediaQuery from "@material-ui/core/useMediaQuery"
import { useTheme } from "@material-ui/core/styles"
import { useTranslation } from "gatsby-theme-intl"

const useStyles = makeStyles((theme) => ({
  root: {},
  panel: {},
  scrollable: {},
}))

const Featured = () => {
  const [value, setValue] = useState("0")
  const classes = useStyles()
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up("sm"))
  const { t } = useTranslation()
  const variant = matches ? "fullWidth" : "scrollable"

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div className={classes.root}>
      <TabContext value={value}>
        <TabList
          className={classes.scrollable}
          variant={variant}
          onChange={handleChange}
          aria-label="Actualités"
        >
          <Tab value="0" label={t("événements")} />
          <Tab value="1" label={t("offres d'emploi")} />
          <Tab value="2" label={t("offres de thèses")} />
          <Tab value="3" label={t("séminaires")} />
        </TabList>
        <TabPanel className={classes.panel} value="0">
          <Events />
        </TabPanel>
        <TabPanel value="1">
          <Jobs />
        </TabPanel>
        <TabPanel value="2">
          <Jobs phds />
        </TabPanel>
        <TabPanel value="3">
          <Seminars />
        </TabPanel>
      </TabContext>
    </div>
  )
}

export default Featured
