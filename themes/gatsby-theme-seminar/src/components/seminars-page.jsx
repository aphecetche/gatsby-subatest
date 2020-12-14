import React from "react"
import PropTypes from "prop-types"
import Seminars from "./seminars"

const SeminarsPage = ({ data }) => {
  return <Seminars seminars={data.allSeminar.nodes} />
}

SeminarsPage.propTypes = {
  data: PropTypes.shape({
    allSeminar: PropTypes.shape({
      nodes: PropTypes.array,
    }).isRequired,
  }),
}

export default SeminarsPage
