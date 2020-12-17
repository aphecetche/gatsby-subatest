import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import Header from "./header"
import Footer from "./footer"
import Alert from "@material-ui/lab/Alert"
import { useTranslation, usePageContext } from "gatsby-theme-intl"
import DevOnly from "components/dev-only"

const TranslationInfo = () => {
  const pageContext = usePageContext()
  const { translations } = pageContext
  if (translations === undefined) {
    return <Alert severity="error">No translations at all ??</Alert>
  }
  const msg = JSON.stringify(pageContext)

  return translations.includes("fr") && translations.includes("en") ? (
    <Alert severity="success">
      Fine. We get a page with translations {msg}
    </Alert>
  ) : (
    <Alert severity="warning">
      This page has not yet been translated {msg}
    </Alert>
  )
}

const useStyles = makeStyles((theme) => ({
  main: {
    margin: "0 auto",
    padding: theme.spacing(1),
    "& h1": {
      color: theme.palette.primary.main,
      fontWeight: "400",
    },
  },
}))

const Layout = ({ children }) => {
  const classes = useStyles()
  const { t } = useTranslation()
  return (
    <>
      <DevOnly className={classes.dev}>
        <TranslationInfo />
        <Alert severity="error">{t("global_message")}</Alert>
      </DevOnly>
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
