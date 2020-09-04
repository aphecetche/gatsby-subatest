import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Img from "gatsby-theme-mdx"
import { graphql } from "gatsby"

const useStyles = makeStyles((theme) => ({
  logo: {
    margin: theme.spacing(0, 2, 0, 0),
    maxWidth: "180px",
    width: "20%",
  },
}))

const Logo = ({ img, alt, href }) => {
  const classes = useStyles()
  return (
    <div className={classes.logo}>
      <a href={href} alt={alt}>
        <Img fluid={img} />
      </a>
    </div>
  )
}

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 250, fit: CONTAIN, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export default Logo
