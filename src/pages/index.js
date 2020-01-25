import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Navigation from "../components/navigation"
import FullScreenImage from "../components/fullscreenimage"
import css from "../components/fullscreenimage.module.css"

const IndexPage = () =>
    (
        <div>
            <SEO title="Home" />
        <FullScreenImage className={css.fullscreenimage}>
            <h1>Laboratoire Subatech</h1>
        </FullScreenImage>
        <Navigation />
    </div>
    )

export default IndexPage
