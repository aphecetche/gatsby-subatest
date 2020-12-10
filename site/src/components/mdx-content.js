import React from "react"
import { makeStyles } from "@material-ui/core"
import { MdxArticle } from "gatsby-theme-article/src/components/mdx-article"
import PropTypes from "prop-types"

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

const MdxContent = ({ title, body, images }) => {
  const classes = useStyles()
  return (
    <main className={classes.root}>
      <MdxArticle title={title} body={body} images={images} />
    </main>
  )
}
MdxContent.propTypes = {
  title: PropTypes.string,
  images: PropTypes.object,
  body: PropTypes.string,
}
export default MdxContent
