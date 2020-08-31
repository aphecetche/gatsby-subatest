import React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import Layout from "../components/layout"
import { makeStyles, Grid } from "@material-ui/core"
import Asides from "gatsby-theme-asides/src/components/Asides"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "../components/DebugComponents"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    ...theme.typography.body1,
  },
  main: {
    margin: 0,
    [theme.breakpoints.down("xs")]: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    "& h2": {
      ...theme.typography.h4,
      color: theme.palette.primary.main,
    },
    "& p": {
      textAlign: "justify",
      textJustify: "inter-character",
    },
  },
}))

const RechercheLayout = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const classes = useStyles()

  let extra =
    frontmatter.asides &&
    frontmatter.asides.map((a, i) => (
      <Asides slug={mdx.slug} key={i} regexp={a} />
    ))

  return (
    <MDXProvider components={DebugComponents}>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={6} className={classes.main}>
            <main className={classes.main}>
              <h2>{frontmatter.title}</h2>
              <MDXRenderer>{body}</MDXRenderer>
            </main>
          </Grid>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={3}>
            {extra}
          </Grid>
        </Grid>
      </Layout>
    </MDXProvider>
  )
}

export const query = graphql`
  query rechercheLayout($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        layout
        asides
      }
      body
      slug
    }
  }
`

export default RechercheLayout
