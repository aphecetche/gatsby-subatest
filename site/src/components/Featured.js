import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Events from "components/Events"
import Jobs from "components/Jobs"
import Seminars from "components/Seminars"
import { useTranslation } from "gatsby-theme-intl"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

const useStyles = makeStyles(() => ({
  root: {},
  panel: {},
  scrollable: {},
}))

const Featured = () => {
  const classes = useStyles()
  const { t } = useTranslation()

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {t("séminaires")}
        </AccordionSummary>
        <AccordionDetails>
          <Seminars />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {t("événements")}
        </AccordionSummary>
        <AccordionDetails>
          <Events />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {t("offres d'emploi")}
        </AccordionSummary>
        <AccordionDetails>
          <Jobs />
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          {t("offres de thèses")}
        </AccordionSummary>
        <AccordionDetails>
          <Jobs phds />
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default Featured
