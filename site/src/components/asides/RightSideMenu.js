/* eslint-disable react/display-name */

import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { makeStyles } from "@material-ui/core"
import { usePageContext, localizeUrl } from "gatsby-theme-intl"
import { NavLink, isSamePath } from "gatsby-theme-nav"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    "& h2": {
      ...theme.typography.h6,
      color: theme.palette.primary.main,
      textAlign: "right",
    },
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& li": {
        display: "block",
        marginBottom: theme.spacing(1),
        border: "none",
        borderBottom: `1px dotted ${theme.palette.grey["400"]}`,
        "&.active": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
      },
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
          background: theme.palette.grey["200"],
        },
      },
    },
    "& li>ul": {
      paddingLeft: theme.spacing(2),
      "& li": {
        borderBottom: "none",
      },
    },
  },
}))

const RightSideMenu = ({ children }) => {
  const classes = useStyles()
  const { language, slug } = usePageContext()
  const CustomListItem = React.useMemo(() => {
    return (props) => {
      let cn = ""
      if (props.children.props) {
        const same = isSamePath(
          props.children.props.href,
          localizeUrl(slug, language)
        )
        cn = same ? "active" : ""
      }
      return <li className={cn} {...props} />
    }
  }, [slug, language])

  const CustomLink = ({ href, children }) => {
    return <NavLink to={href}>{children}</NavLink>
  }

  const MyComponents = {
    li: CustomListItem,
    a: CustomLink,
  }

  return (
    <div className={classes.root}>
      <MDXProvider components={MyComponents}>
        <MDXRenderer>{children}</MDXRenderer>
      </MDXProvider>
    </div>
  )
}

export default RightSideMenu
