import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { makeStyles } from "@material-ui/core/styles"
import { usePageContext } from "gatsby-theme-intl"

const useStyles = makeStyles((theme) => ({
  logo: {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundImage: (props) => `url(${props.logoUrl})`,
    width: (props) => `${props.logoWidth}`,
    height: (props) => `${props.logoHeight}`,
  },
}))

const Logo = () => {
  const { language } = usePageContext()
  const logo = useStaticQuery(graphql`
    {
      allFile(
        filter: { base: { regex: "/logo-subatech/" }, extension: { eq: "svg" } }
      ) {
        nodes {
          publicURL
        }
      }
    }
  `).allFile.nodes[0]
  const css = useStyles({
    logoUrl: logo.publicURL,
    logoWidth: "140px",
    logoHeight: "67px",
  })
  return <Link className={css.logo} to={"/" + language} />
}

export default Logo
