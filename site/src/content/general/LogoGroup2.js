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

const LogoGroup2 = () => {
  const data = useStaticQuery(
    graphql`
      query {
        ubl: file(relativePath: { regex: "/general/images/UBLlogo/" }) {
          ...fluidImage
        }
        osuna: file(relativePath: { regex: "/general/images/Logo_OSUNA/" }) {
          ...fluidImage
        }
        ed: file(relativePath: { regex: "/general/images/3MPL/" }) {
          ...fluidImage
        }
        ic: file(
          relativePath: { regex: "/general/images/Logo-Institut-Carnot-M/" }
        ) {
          ...fluidImage
        }
      }
    `
  )
  const classes = useStyles()
  console.log("data=", JSON.stringify(data))
  return (
    <div className={classes.root}>
      <Logo
        img={data.ubl.childImageSharp.fluid}
        alt="Logo UBL"
        href="https://u-bretagneloire.fr"
      />
      <Logo
        img={data.osuna.childImageSharp.fluid}
        alt="Logo OSUNA"
        href="http://www.osuna.univ-nantes.fr"
      />
      <Logo
        img={data.ed.childImageSharp.fluid}
        alt="Logo ED"
        href="https://ed-3m.doctorat-bretagneloire.fr"
      />
      <Logo
        img={data.ic.childImageSharp.fluid}
        alt="Logo IC"
        href="https://www.carnot-mines.eu"
      />
    </div>
  )
}

export default LogoGroup2
