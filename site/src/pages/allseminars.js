import React from "react"
import {StaticQuery, graphql,Link } from "gatsby"
import Layout from "components/Layout"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment";
import 'moment/locale/fr'
import { useTranslation,usePageContext, localizeUrl } from "gatsby-theme-intl";

export default function AllSeminars() {
  // store the dates between which we show seminars
  const todaydate= moment()
  const { language: currentLanguage } = usePageContext();
  const { t } = useTranslation()
  const sems = t("séminaires")
  moment.locale(currentLanguage)
  return (
    <Layout>
    <h1 style={{textTransform: 'capitalize'}}>{sems}</h1>
    <ul>
    <StaticQuery
      query={graphql`
      query {
        allMdx(filter: {frontmatter: {category: {eq: "seminar"}}},
        sort: { order: DESC, fields: [frontmatter___date] }) {
           edges {
           node {
             frontmatter
             {title
              title2
             author
             author2
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
         return <li>
             {moment(node.frontmatter.date, "YYYY-MM-DD HH:mm:ss Z").isAfter(todaydate) ? <b>{moment(node.frontmatter.date,"YYYY-MM-DD HH:mm:ss Z").format("Do MMMM YYYY, HH:mm")}</b> : moment(node.frontmatter.date,"YYYY-MM-DD HH:mm:ss Z").format("Do MMMM YYYY") },&nbsp;
             <span style={{textTransform: 'capitalize'}}>{node.frontmatter.author.toLowerCase()} {(node.frontmatter.author!==""&&node.frontmatter.author2!=="") ?  "&" : ""} {node.frontmatter.author2.toLowerCase()}</span> :&nbsp;
             <Link to={localizeUrl(node.fields.slug,currentLanguage)}>{node.frontmatter.title}
             {(node.frontmatter.title!==""&&node.frontmatter.title2!=="") ?  " & " : ""}{node.frontmatter.title2}</Link>,&nbsp;
             {t(node.frontmatter.type)}</li>
         //return 
        })
      )}
    />
    </ul>
    </Layout>
  )
}


