import React from "react"
import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import PropTypes from "prop-types"

const Accordions = ({ items }) => {
  const elements = items.map((item, i) => (
    <Accordion key={i}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        {item.title}
      </AccordionSummary>
      <AccordionDetails>{item.content}</AccordionDetails>
    </Accordion>
  ))
  return elements
}

Accordions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      content: PropTypes.node,
    })
  ),
}
export default Accordions
