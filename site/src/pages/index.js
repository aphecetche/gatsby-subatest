import React from "react"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import FullScreenImage from "../components/fullscreenimage"
import css from "../components/fullscreenimage.module.css"
import { graphql } from "gatsby"

//desktop: file(relativePath: { eq: "alice-muon-slat-wires-closeup.jpg"}) {
//desktop: file(relativePath: { eq: "double-chooz-topview.jpg"}) {
export const query = graphql`
  query {
    desktop: file(relativePath: { eq: "electronic-pacman.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  const c = css.fullscreenimage + " " + css.darkimage
  return (
    <div>
      <SEO title="Home" />
      <Navigation />
      <FullScreenImage className={c} img={data.desktop.childImageSharp.fluid}>
        <h1 className={css.header}>Laboratoire Subatech</h1>
      </FullScreenImage>
    </div>
  )
}

export default IndexPage
