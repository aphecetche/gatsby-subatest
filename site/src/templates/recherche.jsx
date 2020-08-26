import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
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

const RechercheLayout = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const classes = useStyles()

  return (
    <>
      <h1>RechercheLayout</h1>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={7} className={classes.main}>
            <main>
              <h1>{frontmatter.title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={0} sm={1} />
          <Grid item xs={12} sm={3} />
          {/* should get the right side menu here */}
          <Grid item xs={0} sm={1} />
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
        layout
        rightSideMenu
      }
      body
      slug
    }
  }
`

export default RechercheLayout
