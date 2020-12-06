import React from "react";
// import { useTranslation } from "gatsby-theme-intl"

// const Seminars = () => {
//   const { t } = useTranslation()
//   const what = t("séminaires").toLowerCase()
//   const msg = t("future_list", { what })
//   return <p>{msg}</p>
import { StaticQuery, graphql, Link } from "gatsby";
// import Layout from "components/Layout"
// import { MDXRenderer } from "gatsby-plugin-mdx"
import moment from "moment";
import "moment/locale/fr";
import { useTranslation, usePageContext, localizeUrl } from "gatsby-theme-intl";

export default function Seminars() {
  // store the dates between which we show seminars
  const earlydate = moment().subtract(1, "M");
  const latedate = moment().add(3, "M");
  //moment.locale('fr')
  const { language: currentLanguage } = usePageContext();
  const { t } = useTranslation();
  const plus = t("Plus");
  return (
    <div>
      <ul>
        <StaticQuery
          query={graphql`
            query {
              allMdx(
                filter: { frontmatter: { category: { eq: "seminar" } } }
                sort: { order: DESC, fields: [frontmatter___date] }
              ) {
                edges {
                  node {
                    frontmatter {
                      title
                      title2
                      date
                      location
                      type
                    }
                    fields {
                      slug
                      language
                    }
                    id
                    body
                  }
                }
              }
            }
          `}
          render={(data) =>
            data.allMdx.edges.map(({ node }) => {
              if (
                moment(node.frontmatter.date, "YYYY-MM-DD HH:mm:ss Z").isAfter(
                  earlydate
                ) &&
                moment(node.frontmatter.date, "YYYY-MM-DD HH:mm:ss Z").isBefore(
                  latedate
                )
              )
                // if(moment(node.frontmatter.date).isAfter(earlydate))
                //   return
                // {node.frontmatter.type==='heures-thesards'&&<tr><td></td><td></td></tr>}
                // {(moment(node.frontmatter.date).isAfter(earlydate)&&moment(node.frontmatter.date).isBefore(latedate))&& "a"}
                // <td>{node.frontmatter.type==='heures-thésards'&& "a"}</td>
                //<td>{earlydate}</td>
                return (
                  <li key={node.id}>
                    {moment(
                      node.frontmatter.date,
                      "YYYY-MM-DD HH:mm:ss Z"
                    ).format("DD-MM-YYYY")}
                    , &nbsp;
                    {t(node.frontmatter.type)}:&nbsp;
                    {/* <a href={node.fields.slug}>{node.frontmatter.title}</a> */}
                    <Link to={localizeUrl(node.fields.slug, currentLanguage)}>
                      {node.frontmatter.title}
                      {node.frontmatter.title !== "" &&
                      node.frontmatter.title2 !== ""
                        ? " & "
                        : ""}
                      {node.frontmatter.title2}
                    </Link>
                  </li>
                );
              return "";
            })
          }
        />
      </ul>
      <p>
        <Link to="allseminars">{plus}...</Link>
      </p>
    </div>
  );
}
