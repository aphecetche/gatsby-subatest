import React from "react"
import { graphql, Link } from "gatsby"
import * as path from "path"

/** Example page showing articles of one category (blabla), ordered by rank */

const BlaBlaArticles = ({ data }) => {
  return data.allArticle.nodes.map((article) => {
    const linkDest = path.join("/", article.language, article.slug)
    return (
      <li key={article.id}>
        <Link to={linkDest}>title:{article.title}</Link> (category:
        {article.category}) {article.rank ? `[rank:${article.rank}]` : ""}
        --- lang: {article.language} --- slug:{article.slug}
      </li>
    )
  })
}

export const BlaBlaArticlesQuery = graphql`
  query {
    allArticle(
      sort: { fields: rank }
      filter: { category: { regex: "/bla/" } }
    ) {
      nodes {
        id
        rank
        title
        category
        slug
        language
      }
    }
  }
`

export default BlaBlaArticles
