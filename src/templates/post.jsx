import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Aside from "../components/aside"

const Post = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx

  let extra =
    frontmatter.asides &&
    frontmatter.asides.map((a, i) => <Aside key={i} regexp={a} />)

  return (
    <Layout>
      {extra}
      <main>
        <h1>{frontmatter.title}</h1>
        <MDXRenderer>{body}</MDXRenderer>
      </main>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        asides
      }
      body
    }
  }
`

export default Post
