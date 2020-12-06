import React from "react"
import BaseSeminar from "gatsby-theme-seminar/src/components/seminar"
import Layout from "../../components/layout"

const Seminar = (props) => {
  return (
    <Layout>
      <BaseSeminar {...props} />
    </Layout>
  )
}

export default Seminar
