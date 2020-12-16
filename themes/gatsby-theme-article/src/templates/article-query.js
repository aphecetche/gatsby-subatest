import { graphql } from "gatsby"

import ArticlePage from "../components/article-page"

export default ArticlePage

export const query = graphql`
  fragment articleImages on File {
    childImageSharp {
      original {
        src
      }
      fluid(quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment articleContent on Article {
    language
    slug
    title
    layout
    images {
      ...articleImages
    }
    id
    body
  }
  query ArticlePageQuery($id: String!) {
    article(id: { eq: $id }) {
      ...articleContent
    }
  }
`
