import React from "react"
import { makeStyles } from "@material-ui/core"
import { MDXRenderer } from "gatsby-plugin-mdx"

const useStyles = makeStyles((theme) => ({
  root: {
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

const MdxContent = ({ title, body }) => {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      {title && <h2>{title}</h2>}
      <MDXRenderer>{body}</MDXRenderer>
    </main>
  )
}

export default MdxContent
