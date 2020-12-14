/* eslint-disable react/display-name */

import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { makeStyles, Grid } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import moment from "moment"
import { useTranslation, usePageContext } from "gatsby-theme-intl"
import PropTypes from "prop-types"

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
}))

const Seminar = ({ seminar }) => {
  const classes = useStyles()
  const { language: currentLanguage } = usePageContext()
  const { t } = useTranslation()
  moment.locale(currentLanguage)
  return (
    <MDXProvider>
      <Grid container className={classes.root}>
        <Grid item xs={false} sm={1} />
        <Grid item xs={12} sm={10} className={classes.main}>
          <main>
            <h1 style={{ textTransform: "capitalize" }}>{t(seminar.type)}</h1>
            <h2>
              {moment(seminar.date, "YYYY-MM-DD HH:mm:ss Z").format(
                "dddd, MMMM Do YYYY, HH:mm"
              )}
              , {seminar.location}
            </h2>
            {seminar.title && <h3> {seminar.title}</h3>}
            {seminar.author && (
              <h4>
                {" "}
                {seminar.author_url && (
                  <a
                    href={seminar.author_url}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textTransform: "capitalize" }}
                  >
                    {seminar.author.toLowerCase()}
                  </a>
                )}
                {seminar.author_url === "" && (
                  <span style={{ textTransform: "capitalize" }}>
                    {seminar.author.toLowerCase()}
                  </span>
                )}
                ,&nbsp;
                {seminar.author_filiation_url && (
                  <a
                    href={seminar.author_filiation_url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {seminar.author_filiation}
                  </a>
                )}
                {seminar.author_filiation_url === "" &&
                  seminar.author_filiation}
              </h4>
            )}
            {seminar.title2 && <h3>{seminar.title2}</h3>}
            {seminar.author2 && (
              <h4>
                {" "}
                {seminar.author_url2 && (
                  <a
                    href={seminar.author_url2}
                    target="_blank"
                    rel="noreferrer"
                    style={{ textTransform: "capitalize" }}
                  >
                    {seminar.author2.toLowerCase()}
                  </a>
                )}
                {seminar.author_url2 === "" && (
                  <span style={{ textTransform: "capitalize" }}>
                    {seminar.author2.toLowerCase()}
                  </span>
                )}
                ,&nbsp;
                {seminar.author_filiation_url2 && (
                  <a
                    href={seminar.author_filiation_url2}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {seminar.author_filiation2}
                  </a>
                )}
                {seminar.author_filiation_url2 === "" &&
                  seminar.author_filiation2}
              </h4>
            )}

            <MDXRenderer>{seminar.body}</MDXRenderer>
          </main>
        </Grid>
        <Grid item xs={false} sm={1} />
      </Grid>
    </MDXProvider>
  )
}

Seminar.propTypes = {
  seminar: PropTypes.shape({
    body: PropTypes.string,
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
}

export default Seminar
