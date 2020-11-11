/* eslint-disable react/display-name */

import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/Layout"
import { makeStyles, Grid } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "../components/DebugComponents"
import moment from "moment";

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

const SeminarLayout = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const classes = useStyles()

  return (
    <MDXProvider components={DebugComponents}>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={10} className={classes.main}>
            <main>
              {frontmatter.title && <h1>Séminaire {frontmatter.type} : {frontmatter.title}</h1>}
              {// fix locale
              }
              <h3>{moment(frontmatter.date).format("dddd, MMMM Do YYYY, h:mm a")}, {frontmatter.location}</h3>
              <h4>
              {frontmatter.author_url && <a href={frontmatter.author_url} target="_blank">{frontmatter.author}</a>  }
            {frontmatter.author_url =="" && frontmatter.author  }              
            ,&nbsp;
            {frontmatter.author_filiation_url && <a href={frontmatter.author_filiation_url} target="_blank">{frontmatter.author_filiation}</a>  }
            {frontmatter.author_filiation_url =="" && frontmatter.author_filiation  }
            </h4>
              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={false} sm={1} />
        </Grid>
      </Layout>
    </MDXProvider>
  )
}

export const query = graphql`
  query seminarLayout($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        layout
        author
        author_url
        date
        location
        type
        author_filiation
        author_filiation_url
      }
      body
      slug
    }
  }
`

export default SeminarLayout
