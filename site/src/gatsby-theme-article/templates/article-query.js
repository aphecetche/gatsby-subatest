/* eslint-disable react/display-name */
import { graphql } from "gatsby"

import ArticlePage from "../components/article-page"

export default ArticlePage

export const query = graphql`
  query ArticlePageQueryWithToto(
    $id: String!
    $fileDir: String
    $language: String
  ) {
    article(id: { eq: $id }) {
      ...articleContent
    }
    menu(fileDir: { eq: $fileDir }, language: { eq: $language }) {
      title
      links {
        name
        to
      }
      rank
      language
    }
  }
`
