import React from "react"
import { makeStyles } from "@material-ui/core"
import { Link } from "gatsby"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  nav: {
    ...theme.typography.body2,
    fontWeight: "300",
    background: theme.palette.primary.dark,
    color: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    margin: 0,
    "& ul": {
      margin: `0 ${theme.spacing(1)}`,
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      listStyle: "none",
      "& li": {
        margin: 0,
        padding: "0 1.875rem",
      },
      "& a": {
        margin: 0,
        padding: 0,
        color: theme.palette.background.default,
        textDecoration: "none",
        "&:hover": {
          color: theme.palette.secondary.main,
        },
      },
    },
  },
  address: {
    ...theme.typography.body2,
    color: theme.palette.text.disabled,
    marginTop: theme.spacing(2),
    "& a": {
      color: theme.palette.text.secondary,
      textDecoration: "none",
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
const Footer = () => {
  const classes = useStyles()
  return (
    <footer className={classes.root}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/general/tutelles">Tutelles</Link>
          </li>
          <li>
            <a href="http://intranet-subatech">Intranet</a>
          </li>
          <li>
            <Link to="/general/annuaires">Annuaires</Link>
          </li>
          <li>
            <Link to="/general/mentions-legales">Mentions légales</Link>
          </li>
          <li>
            <Link to="/general/nous-contacter">Contact</Link>
          </li>
        </ul>
      </nav>
      <address className={classes.address}>
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
    </footer>
  )
}

export default Footer
