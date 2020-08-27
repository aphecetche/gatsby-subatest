/* eslint-disable react/display-name */

import React from "react"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { MDXProvider } from "@mdx-js/react"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    "& a": {
      "&.active": {
        color: "pink",
      },
    },
  },
}))

const RightSideMenu = ({ slug, children }) => {
  const classes = useStyles()
  const CustomLink = React.useMemo(() => {
    return (props) => {
      let cn = props.href === `/${slug}` ? "active" : ""
      return (
        <>
          <a className={cn} {...props} />
        </>
      )
    }
  }, [slug])
  const MyComponents = {
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
