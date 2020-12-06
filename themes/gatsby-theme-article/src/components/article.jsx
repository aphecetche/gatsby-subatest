import React from "react"
import PropTypes from "prop-types"
import MdxContent from "gatsby-theme-mdx/src/components/mdx-content"

const Article = ({ article }) => {
  const { title, body, images } = article
  return <MdxContent title={title} body={body} images={images} />
}

Article.propTypes = {
  article: PropTypes.shape({
    body: PropTypes.string.isRequired,
    title: PropTypes.string,
    images: PropTypes.arrayOf(
      PropTypes.shape({ childImageSharp: PropTypes.any })
    ),
  }),
}

export default Article
