import React from "react"
import MdxContent from "components/MdxContent"
import PropTypes from "prop-types"

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

MdxContentWithEmbeddedImages.propTypes = {
  node: PropTypes.shape({
    frontmatter: PropTypes.shape({
      images: PropTypes.arrayOf(
        PropTypes.shape({ childImageSharp: PropTypes.any })
      ),
    }),
  }),
  showTitle: PropTypes.bool,
}
export default MdxContentWithEmbeddedImages
