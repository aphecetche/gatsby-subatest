import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"

const Post = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  return (
    <Layout>
      <h1>{frontmatter.title}</h1>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
      }
      body
    }
  }
`

export default Post
