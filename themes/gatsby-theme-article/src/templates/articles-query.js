import { graphql } from "gatsby"

import ArticlesPage from "../components/articles-page"

export default ArticlesPage

export const query = graphql`
  query ArticlesPageQuery($language: String!) {
    allArticle(filter: { language: { eq: $language } }) {
      nodes {
        title
        language
        slug
        id
      }
    }
  }
`
