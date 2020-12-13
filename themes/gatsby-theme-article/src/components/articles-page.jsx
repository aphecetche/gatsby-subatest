import React from "react"
import PropTypes from "prop-types"
import Articles from "./articles"

const ArticlesPage = ({ data }) => {
  const { allArticle } = data
  return <Articles articles={allArticle.nodes} />
}

ArticlesPage.propTypes = {
  data: PropTypes.shape({
    allArticle: PropTypes.object.isRequired,
  }),
}

export default ArticlesPage
