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
import moment from "moment";


export default function Seminars() {
  // store the dates between which we show seminars
  const earlydate= moment().subtract(1,'M')
  const latedate= moment().add(3,'M')

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
           fields{
             slug
           }
           body
           }
         }
       }
      }
      `}
      render={data => (
        data.allMdx.edges.map(({ node }, index) => {
          if((moment(node.frontmatter.date).isAfter(earlydate)&&moment(node.frontmatter.date).isBefore(latedate)))
          // if(moment(node.frontmatter.date).isAfter(earlydate))
          //   return
          // {node.frontmatter.type==='heures-thesards'&&<tr><td></td><td></td></tr>}
          // {(moment(node.frontmatter.date).isAfter(earlydate)&&moment(node.frontmatter.date).isBefore(latedate))&& "a"}
          // <td>{node.frontmatter.type==='heures-thésards'&& "a"}</td>
          //<td>{earlydate}</td> 
         return <tr><td>{moment(node.frontmatter.date).format("DD-MM-YYYY")}</td><td><a href={node.fields.slug}>{node.frontmatter.title}</a></td><td>{node.frontmatter.type}</td></tr>
         return 
        })
      )}
    />
    </table>
  )
}


