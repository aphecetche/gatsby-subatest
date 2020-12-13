import React from "react"
import { Link } from "gatsby"

const ArticleLink = ({ article }) => {
  return (
    <Link to={"/" + article.language + article.slug}>
      {article.title} [{article.language}]
    </Link>
  )
}

export default ArticleLink
