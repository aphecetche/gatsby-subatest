import React from "react"
import { Link } from "gatsby"

const PdfDocument = ({ to, title }) => <Link to={to}>{title} [PDF]</Link>

export default PdfDocument
