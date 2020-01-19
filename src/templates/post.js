import React from "react"
import { graphql } from "gatsby"

const Post = ({data}) => {
    const { markdownRemark } = data
    const { frontmatter, html } = markdownRemark

    return (
        <div>
            <h1>{frontmatter.title}</h1>
            <div
                dangerouslySetInnerHTML={{ __html: html}}
            />
        </div>
    )
}


export const query = graphql`
query($slug:String!) {
    markdownRemark(fields: { slug: { eq: $slug }}) {
    frontmatter {
      title
    }
    html
  }
}
`

export default Post
