import React from "react"
import Featured from "components/Featured"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { usePageContext, getTranslatedContent } from "gatsby-theme-intl"

const HomePage = ({ data }) => {
  const edges = data.allMdx.edges
  const { language } = usePageContext()
  const { node: head } = getTranslatedContent(edges, language)
  return (
    <Layout>
      {head && <MDXRenderer>{head.body}</MDXRenderer>}
      <Featured />
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    head: PropTypes.shape({
      body: PropTypes.string,
    }),
  }),
}

export default HomePage

export const query = graphql`
  query {
    allMdx(filter: { fields: { slug: { eq: "/general/presentation/" } } }) {
      edges {
        node {
          ...mdxContent
        }
      }
    }
  }
`
