import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useTranslation } from "gatsby-theme-intl"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PropTypes from "prop-types"

const useStyles = makeStyles(() => ({
  root: {},
  panel: {},
  scrollable: {},
}))

const Featured = ({ items }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  const elements = items.map((item, i) => (
    <Accordion key={i}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {t(item.title)}
      </AccordionSummary>
      <AccordionDetails>{item.content}</AccordionDetails>
    </Accordion>
  ))
  return <div className={classes.root}>{elements}</div>
}

Featured.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
}
export default Featured
