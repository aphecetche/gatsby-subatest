import React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import MdxContentProvider from "gatsby-theme-mdx/src/components/mdx-content-provider"
import MdxContent from "gatsby-theme-mdx/src/components/mdx-content"
import Accordions from "../../components/accordions"

const GeneralPresentation = ({ data, pageContext }) => {
  const items = data.axes?.nodes
    .filter((n) => n.language === pageContext.language)
    .map((n) => ({
      title: n.title,
      content: <MdxContent body={n.body} images={n.images} />,
    }))
  const heads = data.head?.nodes.filter(
    (n) => n.language === pageContext.language
  )

  const head = heads.length > 0 ? heads[0] : null

  return (
    <Layout>
      <MdxContentProvider>
        <MdxContent body={head?.body} images={head?.images} />
        <Accordions items={items} />
      </MdxContentProvider>
    </Layout>
  )
}

GeneralPresentation.propTypes = {
  data: PropTypes.object,
  pageContext: PropTypes.shape({ language: PropTypes.string.isRequired }),
}

export default GeneralPresentation

/** this query gets two sets of articles located in the `axes-de-recherche` subdirectory
 *
 * a first set of articles with a filename not containing "presentation" that should each
 * relates to one "axe de recherche"
 *
 * a second set (possibly a single article) that can be used as a header to present
 * the other articles
 */
export const query = graphql`
  query {
    axes: allArticle(
      filter: {
        fileAbsolutePath: { regex: "/axes-de-recherche/(?!presentation)/" }
      }
      sort: { fields: rank, order: ASC }
    ) {
      nodes {
        ...articleContent
      }
    }
    head: allArticle(
      filter: {
        fileAbsolutePath: { regex: "/axes-de-recherche/presentation/" }
      }
    ) {
      nodes {
        ...articleContent
      }
    }
  }
`
