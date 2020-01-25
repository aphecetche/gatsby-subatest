import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

import BackgroundImage from 'gatsby-background-image'

const FullScreenImage = ({ children,className }) => (
  <StaticQuery
    query={graphql`
      query {
          desktop: file(relativePath: { eq: "alice-muon-slat-wires-closeup.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
        >
            {children}
        </BackgroundImage>
      )
    }}
  />
)


export default FullScreenImage

