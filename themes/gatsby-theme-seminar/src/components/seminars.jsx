import React from "react"
import SeminarList from "./seminar-list"
import PropTypes from "prop-types"

const Seminars = ({ data }) => {
  const seminars = data.allSeminar.nodes
  return (
    <main>
      <SeminarList seminars={seminars} />
    </main>
  )
}

Seminars.propTypes = {
  data: PropTypes.shape({
    allSeminar: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}
export default Seminars
