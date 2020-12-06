import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

const ArticleLink = ({ article }) => {
  return (
    <Link to={"/" + article.language + article.slug}>
      {article.title} [{article.language}]
    </Link>
  )
}

ArticleLink.propTypes = {
  article: PropTypes.shape({
    language: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }),
}
export default ArticleLink
