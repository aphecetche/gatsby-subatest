import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import PropTypes from "prop-types"

const Aside = ({ regexp }) => {
  const data = useStaticQuery(graphql`
    query {
      allMdx(filter: { frontmatter: { aside: { eq: true } } }) {
        edges {
          node {
            fileAbsolutePath
            body
          }
        }
      }
    }
  `)

  const re = new RegExp("/" + regexp + "/")
  const asides = data.allMdx.edges.filter(n =>
    n.node.fileAbsolutePath.match(re)
  )

  console.log("asides=", asides)
  return (
    <React.Fragment>
      {asides.map(m => (
        <aside key={m.node.fileAbsolutePath} className="aside">
          <MDXRenderer>{m.node.body}</MDXRenderer>
        </aside>
      ))}
    </React.Fragment>
  )
}

Aside.propTypes = {
  regexp: PropTypes.string.isRequired,
}
export default Aside
