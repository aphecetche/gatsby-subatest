import React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import moment from "moment";
import "moment/locale/fr";
import { useTranslation, usePageContext } from "gatsby-theme-intl";

export default function AllSeminars({ showTitle = false }) {
  // store the dates between which we show seminars
  const todaydate = moment();
  const { language: currentLanguage } = usePageContext();
  const { t } = useTranslation();
  const sems = t("séminaires");
  moment.locale(currentLanguage);
  return (
    <>
      {showTitle === true && (
        <h1 style={{ textTransform: "capitalize" }}>{sems}</h1>
      )}
      <ul>
        <StaticQuery
          query={graphql`
            query {
              allSeminar(sort: { order: DESC, fields: date }) {
                nodes {
                  id
                  title
                  title2
                  author
                  author2
                  date
                  location
                  type
                  slug
                  body
                }
              }
            }
          `}
          render={(data) =>
            data.allSeminar.nodes.map((node) => {
              return (
                <li key={node.id}>
                  {moment(node.date, "YYYY-MM-DD HH:mm:ss Z").isAfter(
                    todaydate
                  ) ? (
                    <b>
                      {moment(node.date, "YYYY-MM-DD HH:mm:ss Z").format(
                        "Do MMMM YYYY, HH:mm"
                      )}
                    </b>
                  ) : (
                    moment(node.date, "YYYY-MM-DD HH:mm:ss Z").format(
                      "Do MMMM YYYY"
                    )
                  )}
                  ,&nbsp;
                  <span style={{ textTransform: "capitalize" }}>
                    {node.author.toLowerCase()}{" "}
                    {node.author && node.author2 ? "&" : ""}{" "}
                    {node.author2 && node.author2.toLowerCase()}
                  </span>{" "}
                  :&nbsp;
                  <Link to={node.slug}>
                    {node.title}
                    {node.title && node.title2 ? " & " : ""}
                    {node.title2}
                  </Link>
                  ,&nbsp;
                  {t(node.type)}
                </li>
              );
              //return
            })
          }
        />
      </ul>
    </>
  );
}
