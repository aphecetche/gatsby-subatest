import React from "react"
import PropTypes from "prop-types"

const DevOnly = ({ children, className }) => {
  if (process.env.NODE_ENV === "development") {
    return <div className={className}>{children}</div>
  }
  return null
}

DevOnly.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}
export default DevOnly
