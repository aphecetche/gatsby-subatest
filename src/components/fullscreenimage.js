import React from "react"
import BackgroundImage from "gatsby-background-image"

const FullScreenImage = ({ children, className, img }) => {
  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={img}
      backgroundColor={`#040e18`}
    >
      {children}
    </BackgroundImage>
  )
}

export default FullScreenImage
