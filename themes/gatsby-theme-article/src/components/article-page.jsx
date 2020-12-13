import React from "react"
import PropTypes from "prop-types"
import Article from "./article"

const ArticlePage = ({ data }) => {
  const { article } = data
  return <Article article={article} />
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.object.isRequired,
  }),
}

export default ArticlePage
