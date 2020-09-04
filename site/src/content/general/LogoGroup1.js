import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import { useStaticQuery, graphql } from "gatsby"
import Logo from "./Logo"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    boxSizing: "border-box",
  },
}))

const LogoGroup1 = () => {
  const data = useStaticQuery(
    graphql`
      query {
        univ: file(
          relativePath: { regex: "/general/images/logo_univ_nantes.jpg/" }
        ) {
          ...fluidImage
        }
        in2p3: file(
          relativePath: { regex: "/general/images/in2p3filaire.png/" }
        ) {
          ...fluidImage
        }
        imta: file(
          relativePath: { regex: "/general/images/CP-IMTA-leger.jpg/" }
        ) {
          ...fluidImage
        }
      }
    `
  )
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Logo
        img={data.univ.childImageSharp.fluid}
        alt="Logo Université de Nantes"
        href="https://www.univ-nantes.fr"
      />
      <Logo
        img={data.in2p3.childImageSharp.fluid}
        alt="Logo IN2P3"
        href="https://in2p3.cnrs.fr"
      />
      <Logo
        img={data.imta.childImageSharp.fluid}
        alt="Logo IMTA"
        href="https://www.imt-atlantique.fr"
      />
    </div>
  )
}

export default LogoGroup1
