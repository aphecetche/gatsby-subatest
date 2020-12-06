import React from "react"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "components/DebugComponents"
import TopLeft from "components/TopLeft"
import Img from "gatsby-image"

const ForwardedComponents = {
  ...DebugComponents,
  Img,
  TopLeft,
}

const MdxContentProvider = ({ children }) => {
  return <MDXProvider components={ForwardedComponents}>{children}</MDXProvider>
}
export default MdxContentProvider
