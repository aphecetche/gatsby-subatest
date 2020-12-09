/* eslint-disable react/display-name */

import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import { makeStyles, Grid } from "@material-ui/core";
import { MDXProvider } from "@mdx-js/react";
import DebugComponents from "../components/DebugComponents";
import moment from "moment";
import { useTranslation, usePageContext } from "gatsby-theme-intl";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    ...theme.typography.body1,
  },
  aside: {
    "& ul": {
      listStyle: "none",
      border: "1px solid red",
    },
  },
  main: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    "& p": {
      ...theme.typography.body1,
      textAlign: "justify",
      textJustify: "inter-character",
    },
  },
}));

const SeminarLayout = ({ data }) => {
  const { mdx } = data;
  const { frontmatter, body } = mdx;
  const classes = useStyles();
  const { language: currentLanguage } = usePageContext();
  const { t } = useTranslation();
  moment.locale(currentLanguage);
  return (
    <MDXProvider components={DebugComponents}>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} className={classes.main}>
            <main>
              <h1 style={{ textTransform: "capitalize" }}>
                {t(frontmatter.type)}
              </h1>
              <h2>
                {moment(frontmatter.date, "YYYY-MM-DD HH:mm:ss Z").format(
                  "dddd, MMMM Do YYYY, HH:mm"
                )}
                , {frontmatter.location}
              </h2>
              {frontmatter.title && <h3> {frontmatter.title}</h3>}
              {frontmatter.author && (
                <h4>
                  {" "}
                  {frontmatter.author_url && (
                    <a
                      href={frontmatter.author_url}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textTransform: "capitalize" }}
                    >
                      {frontmatter.author.toLowerCase()}
                    </a>
                  )}
                  {frontmatter.author_url === "" && (
                    <span style={{ textTransform: "capitalize" }}>
                      {frontmatter.author.toLowerCase()}
                    </span>
                  )}
                  ,&nbsp;
                  {frontmatter.author_filiation_url && (
                    <a
                      href={frontmatter.author_filiation_url}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {frontmatter.author_filiation}
                    </a>
                  )}
                  {frontmatter.author_filiation_url === "" &&
                    frontmatter.author_filiation}
                </h4>
              )}
              {frontmatter.title2 && <h3>{frontmatter.title2}</h3>}
              {frontmatter.author2 && (
                <h4>
                  {" "}
                  {frontmatter.author_url2 && (
                    <a
                      href={frontmatter.author_url2}
                      target="_blank"
                      rel="noreferrer"
                      style={{ textTransform: "capitalize" }}
                    >
                      {frontmatter.author2.toLowerCase()}
                    </a>
                  )}
                  {frontmatter.author_url2 === "" && (
                    <span style={{ textTransform: "capitalize" }}>
                      {frontmatter.author2.toLowerCase()}
                    </span>
                  )}
                  ,&nbsp;
                  {frontmatter.author_filiation_url2 && (
                    <a
                      href={frontmatter.author_filiation_url2}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {frontmatter.author_filiation2}
                    </a>
                  )}
                  {frontmatter.author_filiation_url2 === "" &&
                    frontmatter.author_filiation2}
                </h4>
              )}

              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Layout>
    </MDXProvider>
  );
};

export const query = graphql`
  query seminarLayout($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        title2
        layout
        author
        author_url
        author2
        author_url2
        date
        location
        type
        author_filiation
        author_filiation_url
        author_filiation2
        author_filiation_url2
      }
      body
      slug
    }
  }
`;

SeminarLayout.propTypes = {
  data: PropTypes.shape({
    mdx: PropTypes.shape({
      body: PropTypes.string,
      frontmatter: PropTypes.shape({
        type: PropTypes.string,
        location: PropTypes.string,
        date: PropTypes.string,
        author: PropTypes.string,
        title: PropTypes.string,
        author_url: PropTypes.string,
        author_filiation: PropTypes.string,
        author_filiation_url: PropTypes.string,
        author2: PropTypes.string,
        title2: PropTypes.string,
        author_url2: PropTypes.string,
        author_filiation2: PropTypes.string,
        author_filiation_url2: PropTypes.string,
      }),
    }),
  }),
};

export default SeminarLayout;
