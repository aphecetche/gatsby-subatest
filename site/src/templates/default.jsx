/* eslint-disable react/display-name */

import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { makeStyles, Grid } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "../components/DebugComponents"

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
    "& p": {
      ...theme.typography.body1,
      textJustify: "justify",
    },
  },
}))

const DefaultLayout = ({ data }) => {
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
              <h1>{frontmatter.title}</h1>
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
  query defaultLayout($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        layout
      }
      body
      slug
    }
  }
`

export default DefaultLayout
