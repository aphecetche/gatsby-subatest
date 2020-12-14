import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"
import MdxContentProvider from "./mdx-content-provider"
const MdxContent = ({ title, body, images }) => {
  const IMAGE_KEY = "image"
  const processedImages =
    images &&
    images.reduce((imgArray, image, index) => {
      imgArray[`${IMAGE_KEY}${index + 1}`] = imgArray[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      }
      return imgArray
    }, {})

  return (
    <MdxContentProvider>
      {" "}
      {title && <h2>{title}</h2>}
      <MDXRenderer images={processedImages}>{body}</MDXRenderer>
    </MdxContentProvider>
  )
}

MdxContent.propTypes = {
  body: PropTypes.string.isRequired,
  title: PropTypes.string,
  images: PropTypes.arrayOf(
    PropTypes.shape({ childImageSharp: PropTypes.any })
  ),
}

export default MdxContent
