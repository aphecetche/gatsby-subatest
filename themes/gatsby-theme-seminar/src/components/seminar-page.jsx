import React from "react"
import PropTypes from "prop-types"
import Seminar from "./seminar"

const SeminarPage = ({ data }) => {
  return <Seminar seminar={data.seminar} />
}

SeminarPage.propTypes = {
  data: PropTypes.shape({
    seminar: PropTypes.object.isRequired,
  }),
}

export default SeminarPage
