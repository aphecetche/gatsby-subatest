import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import Asides from "gatsby-theme-asides/src/components/Asides"
import { makeStyles, Grid } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    ...theme.typography.body1,
    fontSize: "0.875rem",
  },
  aside: {
    "& ul": {
      listStyle: "none",
      border: "1px solid red",
    },
  },
  main: {},
}))
const Post = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const classes = useStyles()

  let extra =
    frontmatter.asides &&
    frontmatter.asides.map((a, i) => (
      <Asides className={classes.aside} key={i} regexp={a} />
    ))

  return (
    <>
      <p>Layout: {frontmatter.layout}</p>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={6} className={classes.main}>
            <main>
              <h1>{frontmatter.title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={4} className={classes.aside}>
            {extra}
          </Grid>
        </Grid>
      </Layout>
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        asides
        layout
      }
      body
      slug
    }
  }
`

export default Post
