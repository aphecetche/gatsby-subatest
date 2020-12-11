import React from "react"
import PropTypes from "prop-types"
import MdxContent from "gatsby-theme-mdx/src/components/mdx-content"

const Article = ({ data }) => {
  const { article } = data
  const { title, body, images } = article
  return <MdxContent title={title} body={body} images={images} />
}

Article.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      body: PropTypes.string.isRequired,
      title: PropTypes.string,
      images: PropTypes.arrayOf(
        PropTypes.shape({ childImageSharp: PropTypes.any })
      ),
    }),
  }),
}

export default Article
