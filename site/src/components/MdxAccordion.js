import PropTypes from "prop-types"
import React from "react"
import clsx from "clsx"
import { MDXRenderer } from "gatsby-plugin-mdx"
import withStyles from "@material-ui/styles/withStyles"
import { useTranslation } from "gatsby-theme-intl"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"

export const styles = () => ({
  root: {},
  tablist: {},
  tab: {},
  tabpanel: {},
})

const MdxAccordion = (props) => {
  const { data, classes, className } = props
  const nodes = data.edges
  const { t } = useTranslation()

  const accordions = nodes.map((n) => (
    <Accordion key={n.node.id}>
      <AccordionSummary
        className={clsx(classes.tab)}
        expandIcon={<ExpandMoreIcon />}
        id={n.node.id}
      >
        {t(n.node.frontmatter.title)}
      </AccordionSummary>
      <AccordionDetails className={clsx(classes.tabpanel)}>
        <MDXRenderer>{n.node.body}</MDXRenderer>
      </AccordionDetails>
    </Accordion>
  ))

  return (
    <div className={clsx(classes.root, className)}>
      {accordions}
    </div>
  )
}

MdxAccordion.propTypes = {
  data: PropTypes.object,
  classes: PropTypes.object,
  className: PropTypes.string,
  ariaLabel: PropTypes.string,
}

export default withStyles(styles)(MdxAccordion)
