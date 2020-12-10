import React from "react"
import MdxAccordion from "components/mdx-accordion"
import Layout from "../../components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import MdxContentProvider from "gatsby-theme-article/src/components/mdx-content-provider"

const Featured = ({ data }) => {
  return (
    <Layout>
      <MdxContentProvider>
        <MDXRenderer>{data.head.body}</MDXRenderer>
        <MdxAccordion data={data.axe} />
      </MdxContentProvider>
    </Layout>
  )
}

Featured.propTypes = {
  data: PropTypes.object,
}

export default Featured

export const query = graphql`
  query {
    axe: allArticle(
      filter: { category: { regex: "/Axe/" } }
      sort: { fields: rank, order: ASC }
    ) {
      nodes {
        ...articleContent
      }
    }
    head: article(fileAbsolutePath: { regex: "/general/presentation/" }) {
      id
      title
      body
    }
  }
`
