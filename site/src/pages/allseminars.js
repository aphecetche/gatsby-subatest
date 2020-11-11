import React from "react"
import {StaticQuery, graphql } from "gatsby"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment";
import 'moment/locale/fr'

export default function allSeminars() {
  // store the dates between which we show seminars
  const todaydate= moment()
  moment.locale('fr')
  return (
    <Layout>
    <h1>Séminaires</h1>
    <table>
    <StaticQuery
      query={graphql`
      query {
        allMdx(filter: {frontmatter: {category: {eq: "seminar"}}},
        sort: { order: DESC, fields: [frontmatter___date] }) {
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
          //if((moment(node.frontmatter.date).isAfter(earlydate)&&moment(node.frontmatter.date).isBefore(latedate)))
          // if(moment(node.frontmatter.date).isAfter(earlydate))
          //   return
          // {node.frontmatter.type==='heures-thesards'&&<tr><td></td><td></td></tr>}
          // {(moment(node.frontmatter.date).isAfter(earlydate)&&moment(node.frontmatter.date).isBefore(latedate))&& "a"}
          // <td>{node.frontmatter.type==='heures-thésards'&& "a"}</td>
          //<td>{earlydate}</td> 
         return <tr>
             <td>{moment(node.frontmatter.date).isAfter(todaydate) ? moment(node.frontmatter.date).format("Do MMMM YYYY, HH:mm") : moment(node.frontmatter.date).format("Do MMMM YYYY") }</td>
             <td>{node.frontmatter.author}</td>
             <td><a href={node.fields.slug}>{node.frontmatter.title}</a></td>
             <td>{node.frontmatter.type}</td></tr>
         //return 
        })
      )}
    />
    </table>
    </Layout>
  )
}


