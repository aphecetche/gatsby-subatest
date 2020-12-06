import React from "react"
import Layout from "components/layout"
import PropTypes from "prop-types"
import Accordions from "../components/accordions"
import { SeminarsInRange } from "gatsby-theme-seminar"
import { useTranslation } from "gatsby-theme-intl"
import { Link } from "gatsby"
import Events from "../components/events"
import Jobs from "../components/jobs"
import { graphql } from "gatsby"
import Article from "gatsby-theme-article/src/components/article"

const SeminarShortList = () => {
  const { t } = useTranslation()
  return (
    <>
      <SeminarsInRange />
      <Link to="/seminars">{t("Plus")}</Link>
    </>
  )
}
const HomePage = ({ data }) => {
  const { t } = useTranslation()
  const { article: head } = data
  head.title = null // ensure we don't show the title, even if we have one
  const items = [
    { title: t("séminaires"), content: <SeminarShortList /> },
    { title: t("événements"), content: <Events /> },
    { title: t("offres d'emploi"), content: <Jobs /> },
    { title: t("offres de thèses"), content: <Jobs phds /> },
  ]
  return (
    <Layout>
      <Article article={head} />
      <Accordions items={items} />
      <p>ici les articles en vedette</p>
    </Layout>
  )
}

HomePage.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.object,
  }),
}

export const query = graphql`
  query {
    article(fileAbsolutePath: { regex: "/general/presentation/" }) {
      ...articleContent
    }
  }
`

export default HomePage
