import React from "react"
import MdxTabs from "components/MdxTabs"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {},
  tablist: {},
  tab: {
    textTransform: "none",
    ...theme.typography.h6,
    fontSize: "1rem",
  },
  tabpanel: {
    flexGrow: 1,
    "& p": {
      textAlign: "justify",
    },
    "& span:first-of-type": {
      float: "left",
      width: "30%",
      minWidth: "200px",
      marginRight: theme.spacing(2, "!important"),
    },
  },
}))

const Featured = ({ data }) => {
  const classes = useStyles()
  return (
    <Layout>
      <MDXRenderer>{data.head.body}</MDXRenderer>
      <MdxTabs classes={classes} data={data.axe} />
    </Layout>
  )
}

Featured.propTypes = {
  data: PropTypes.object,
}

export default Featured

export const query = graphql`
  query {
    axe: allMdx(filter: { frontmatter: { category: { regex: "/Axe/" } } }) {
      edges {
        node {
          id
          frontmatter {
            category
            title
          }
          body
        }
      }
    }
    head: mdx(fileAbsolutePath: { regex: "/general/presentation/" }) {
      id
      frontmatter {
        title
      }
      body
    }
  }
`
