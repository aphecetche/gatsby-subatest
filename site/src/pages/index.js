import React from "react"
import Layout from "components/layout"
import PropTypes from "prop-types"
import Accordions from "../components/accordions"
import { SeminarsInRange } from "gatsby-theme-seminar"
import { useTranslation } from "gatsby-theme-intl"
import { Link } from "gatsby"

const SeminarShortList = () => {
  const { t } = useTranslation()
  return (
    <>
      <SeminarsInRange />
      <Link to="/seminars">{t("Plus")}</Link>
    </>
  )
}
const HomePage = () => {
  const items = [{ title: "Séminaires", content: <SeminarShortList /> }]
  return (
    <Layout>
      <Accordions items={items} />
      <p>ici les articles en vedette</p>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    allArticle: PropTypes.shape({
      nodes: PropTypes.array,
    }),
  }),
}

export default HomePage
