import React from "react"
// import { useTranslation } from "gatsby-theme-intl"

// const Seminars = () => {
//   const { t } = useTranslation()
//   const what = t("séminaires").toLowerCase()
//   const msg = t("future_list", { what })
//   return <p>{msg}</p>
import {StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"

export default function Seminars() {
  return (
    <table>
    <StaticQuery
      query={graphql`
      query {
        allMdx(filter: {frontmatter: {category: {eq: "seminar"}}},
        sort: { order: ASC, fields: [frontmatter___date] }) {
           edges {
           node {
             frontmatter
             {title
             author
             date
             location
             type
           }
           body
           }
         }
       }
      }
      `}
      render={data => (
        data.allMdx.edges.map(({ node }, index) => (
          <tr>
          <td>{node.frontmatter.date}</td>
          <td>{node.frontmatter.title}</td>
          </tr>
                ))
      )}
    />
    </table>
  )
}


