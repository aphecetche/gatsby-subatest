import ArticleBase from "gatsby-theme-article/src/components/article"
import { makeStyles } from "@material-ui/core"
import React from "react"

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

const Article = (props) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <ArticleBase {...props} />
    </div>
  )
}

export default Article
