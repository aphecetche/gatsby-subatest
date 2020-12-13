import React from "react"
import Layout from "components/layout"
import PropTypes from "prop-types"
import Accordions from "../components/accordions"
import { SeminarsInRange } from "gatsby-theme-seminar"

const HomePage = () => {
  const items = [{ title: "Séminaires", content: <SeminarsInRange /> }]
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
