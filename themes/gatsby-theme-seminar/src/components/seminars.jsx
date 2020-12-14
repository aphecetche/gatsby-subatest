import React from "react"
import SeminarList from "./seminar-list"
import PropTypes from "prop-types"

const Seminars = ({ seminars }) => {
  return (
    <main>
      <SeminarList seminars={seminars} />
    </main>
  )
}

Seminars.propTypes = {
  seminars: PropTypes.array,
}
export default Seminars
