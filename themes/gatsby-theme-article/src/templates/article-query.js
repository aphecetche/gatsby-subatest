import { graphql } from "gatsby"

import Article from "../components/article"

export default Article

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
    asides
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
