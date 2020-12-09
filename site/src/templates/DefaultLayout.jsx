import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./MainLayout"
import { getTranslatedContent } from "gatsby-theme-intl"
import MdxContentWithEmbeddedImages from "components/MdxContentWithEmbeddedImages"
import Asides from "components/Asides"
import PropTypes from "prop-types"

const getAsideContent = ({ slug, asides }) => {
  let aside = null

  if (asides) {
    aside = asides.map((a, i) => <Asides slug={slug} key={i} regexp={a} />)
  }

  return aside
}

const DefaultLayout = (props) => {
  const { data, pageContext } = props
  const { language } = pageContext
  const { node } = getTranslatedContent(data.allArticle.nodes, language)
  let main = node ? <MdxContentWithEmbeddedImages node={node} /> : null
  let aside = node ? getAsideContent(node) : null
  return <MainLayout main={main} aside={aside} pageContext={pageContext} />
}

DefaultLayout.propTypes = {
  data: PropTypes.shape({
    allArticle: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
  pageContext: PropTypes.shape({
    language: PropTypes.string,
  }),
}
export const articleContentFragments = graphql`
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
  fragment articleContent on Mdx {
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
`

export const query = graphql`
  query allTranslations($slug: String!) {
    allArticle(filter: { fields: { slug: { eq: $slug } } }) {
      nodes {
        ...articleContent
      }
    }
  }
`

export default DefaultLayout
