import React from "react"
import PropTypes from "prop-types"
import Article from "./article"

const ArticlePage = ({ data, pageContext }) => {
  const { article } = data
  return <Article article={article} pageContext={pageContext} />
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.object.isRequired,
  }),
  pageContext: PropTypes.shape({
    language: PropTypes.string,
    translations: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default ArticlePage
