import React from "react"
import Featured from "components/Featured"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"

const HomePage = ({ data }) => {
  return (
    <Layout>
      <MDXRenderer>{data.head.body}</MDXRenderer>
      <Featured />
    </Layout>
  )
}

export default HomePage

export const query = graphql`
  query {
    head: mdx(fileAbsolutePath: { regex: "/general/presentation/" }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
