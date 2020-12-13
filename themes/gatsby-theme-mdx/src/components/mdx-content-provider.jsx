import React from "react"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "./debug-components"
import Img from "gatsby-image"
import PropTypes from "prop-types"

const ForwardedComponents = {
  ...DebugComponents,
  Img,
}

const MdxContentProvider = ({ children }) => {
  return <MDXProvider components={ForwardedComponents}>{children}</MDXProvider>
}

MdxContentProvider.propTypes = {
  children: PropTypes.node.isRequired,
}
export default MdxContentProvider