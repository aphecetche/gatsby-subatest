import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const PdfDocument = ({ to, title }) => <Link to={to}>{title} [PDF]</Link>

PdfDocument.propTypes = {
  to: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}
export default PdfDocument
