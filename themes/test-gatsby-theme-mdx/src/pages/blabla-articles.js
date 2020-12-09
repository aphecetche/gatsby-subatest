import React from "react";
import { graphql } from "gatsby";

/** Example page showing articles of one category (blabla), ordered by rank */

const BlaBlaArticles = ({ data }) => {
  return data.allArticle.nodes.map((article) => (
    <li key={article.id}>
      title:{article.title} (category:{article.category}){" "}
      {article.rank ? `[rank:${article.rank}]` : ""}
    </li>
  ));
};

export const BlaBlaArticlesQuery = graphql`
  query {
    allArticle(
      sort: { fields: rank }
      filter: { category: { regex: "/bla/" } }
    ) {
      nodes {
        id
        rank
        title
        category
      }
    }
  }
`;

export default BlaBlaArticles;
