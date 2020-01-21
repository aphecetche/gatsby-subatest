import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

export const query = graphql`
query {
    allMarkdownRemark {
        edges {
            node {
                fields {
                    slug
                }
                frontmatter {
                    title
                    menus {
                        main { identifier }
                        side { identifier }
                    }
                }
            }
        }
    }
}
`

const Navigation = ({a}) => {
    // return JSON.stringify(a,null,4)
         return a.allMarkdownRemark.edges.map((e)=> 
             <Link to={e.node.fields.slug}>{e.node.frontmatter.title}</Link>
         )
}

const IndexPage = ({data}) =>
    (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Navigation a={data}/>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
    )

export default IndexPage
