import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./main-layout"
import { getTranslatedContent } from "gatsby-theme-intl"
import MdxArticle from "gatsby-theme-article/src/components/mdx-article"
import Asides from "components/asides"
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
  let main = node ? (
    <MdxArticle title={node.title} images={node.images} body={node.body} />
  ) : null
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

export const query = graphql`
  query allTranslations($slug: String!) {
    allArticle(filter: { slug: { eq: $slug } }) {
      nodes {
        ...articleContent
      }
    }
  }
`

export default DefaultLayout
