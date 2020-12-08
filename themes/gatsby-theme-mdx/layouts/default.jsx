import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { MDXProvider } from "@mdx-js/react";
import PropTypes from "prop-types";

const DefaultLayout = ({ data }) => {
  const { article } = data;
  return (
    <MDXProvider>
      <h1>{article.title}</h1>
      <MDXRenderer>{article.body}</MDXRenderer>
    </MDXProvider>
  );
};

DefaultLayout.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.shape({
      title: PropTypes.string,
      body: PropTypes.string,
    }),
  }),
};
export default DefaultLayout;

export const query = graphql`
  query article($slug: String!) {
    article(slug: { eq: $slug }) {
      title
      body
    }
  }
`;
