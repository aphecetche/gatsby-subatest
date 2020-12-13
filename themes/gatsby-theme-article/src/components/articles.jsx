import React from "react"
import PropTypes from "prop-types"
import ArticleLink from "./article-link"

const Articles = ({ articles }) => {
  return (
    <ul>
      {articles.map((a) => {
        return (
          <li key={a.id}>
            <ArticleLink article={a} />
          </li>
        )
      })}
    </ul>
  )
}

Articles.propTypes = {
  articles: PropTypes.array,
}

export default Articles
