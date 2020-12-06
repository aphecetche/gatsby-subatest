import React from "react"
import MdxContent from "components/MdxContent"

const MdxContentWithEmbeddedImages = ({ node, showTitle = true }) => {
  const IMAGE_KEY = "image"
  const images =
    node.frontmatter.images &&
    node.frontmatter.images.reduce((imgArray, image, index) => {
      imgArray[`${IMAGE_KEY}${index + 1}`] = imgArray[
        `${IMAGE_KEY}${index + 1}`
      ] || {
        ...image.childImageSharp,
      }
      return imgArray
    }, {})

  return (
    <MdxContent
      title={showTitle ? node.frontmatter.title : null}
      images={images}
      body={node.body}
    />
  )
}

export default MdxContentWithEmbeddedImages
