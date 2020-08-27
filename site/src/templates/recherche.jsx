import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { makeStyles, Grid } from "@material-ui/core"
import Asides from "gatsby-theme-asides/src/components/Asides"

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

  let extra =
    frontmatter.asides &&
    frontmatter.asides.map((a, i) => (
      <Asides slug={mdx.slug} className={classes.aside} key={i} regexp={a} />
    ))

  return (
    <>
      <h1>RechercheLayout: slug={mdx.slug}</h1>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={6} className={classes.main}>
            <main>
              <h1>{frontmatter.title}</h1>
              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={4}>
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
        layout
        rightSideMenu
        asides
      }
      body
      slug
    }
  }
`

export default RechercheLayout
