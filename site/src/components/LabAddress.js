import React from "react"
import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  main: {
    ...theme.typography.body2,
    fontSize: "0.65rem",
    color: theme.palette.text.secondary,
    "& a": {
      textDecoration: "none",
      color: "inherit",
    },
    "& a[href^=tel]": {
      marginTop: theme.spacing(1),
    },
    "& p": {
      margin: `${theme.spacing(0)} 0`,
    },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    fontStyle: "normal",
  },
}))

const LabAddress = () => {
  const classes = useStyles()
  return (
    <address className={classes.main}>
      <Link to="/services-techniques-et-administration/administration/venir-a-subatech/">
        Subatech - UMR 6457 - Laboratoire de physique subatomique et des
        technologies associées
      </Link>
      <Link to="/services-techniques-et-administration/administration/venir-a-subatech/">
        4 rue Alfred Kastler - La Chantrerie - BP 20722 - 44307 Nantes cedex -
        France
      </Link>
      <a href="tel:+33251858483">Tél: +33 (0)2 51 85 84 83</a>
    </address>
  )
}

export default LabAddress
