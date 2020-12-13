import React from "react"
import SeminarLink from "./seminar-link"
import PropTypes from "prop-types"

const SeminarList = ({ seminars }) => (
  <>
    {(seminars && seminars.map((n) => <SeminarLink key={n.slug} {...n} />)) ||
      null}
  </>
)

SeminarList.propTypes = {
  seminars: PropTypes.arrayOf(
    PropTypes.shape({ slug: PropTypes.string.isRequired })
  ).isRequired,
}
export default SeminarList
