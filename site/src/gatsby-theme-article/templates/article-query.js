/* eslint-disable react/display-name */
import { graphql } from "gatsby"

import ArticlePage from "../components/article-page"

export default ArticlePage

export const query = graphql`
  query ArticlePageQueryWithToto($id: String!, $path: String) {
    article(id: { eq: $id }) {
      ...articleContent
    }
    menu(path: { eq: $path }) {
      title
    }
  }
`
