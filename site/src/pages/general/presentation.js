import React from "react"
import MdxAccordion from "components/MdxAccordion"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import MdxContentProvider from "components/MdxContentProvider"

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
    axe: allMdx(
      filter: { frontmatter: { category: { regex: "/Axe/" } } }
      sort: { fields: [frontmatter___order], order: ASC }
    ) {
      edges {
        node {
          ...mdxContent
        }
      }
    }
    head: mdx(fileAbsolutePath: { regex: "/general/presentation/" }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
