import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import "./layout.css"
import Header from "./Header"
import Footer from "./Footer"

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    width: "80%",
    "& h1": {
      color: theme.palette.primary.main,
      fontWeight: "400",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.main}>
        <section>{children}</section>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
