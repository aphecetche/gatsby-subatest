import React from "react"
import BaseSeminars from "gatsby-theme-seminar/src/components/seminars"
import Layout from "../../components/layout"

const Seminars = (props) => {
  return (
    <Layout>
      <BaseSeminars {...props} />
    </Layout>
  )
}

export default Seminars
