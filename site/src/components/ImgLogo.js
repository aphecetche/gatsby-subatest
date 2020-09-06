import React from "react"
import Img from "gatsby-theme-mdx"
import { graphql, useStaticQuery } from "gatsby"

export const fluidImage = graphql`
  fragment fluidImage on File {
    childImageSharp {
      fluid(maxWidth: 250, fit: CONTAIN, cropFocus: CENTER) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ImgLogo = ({ img, alt, href }) => {
  const data = useStaticQuery(
    graphql`
      query {
        logos: allFile(
          filter: {
            extension: { regex: "/(jpg)|(jpeg)|(png)/" }
            base: { regex: "/logo/i" }
          }
        ) {
          edges {
            node {
              ...fluidImage
              base
              id
            }
          }
        }
      }
    `
  )

  const imgdata = data.logos.edges.find((n) => n.node.base.includes(img))

  if (!imgdata) {
    return null
  }

  return (
    <a href={href} alt={alt}>
      <Img fluid={imgdata.node.childImageSharp.fluid} />
    </a>
  )
}

export default ImgLogo
