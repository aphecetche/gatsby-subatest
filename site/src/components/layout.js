import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import "./layout.css"
import Header from "./Header"

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    width: "80%",
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  return (
    <>
      <Header />
      <div className={classes.main}>
        <section>{children}</section>
        <footer>© {new Date().getFullYear()}</footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
