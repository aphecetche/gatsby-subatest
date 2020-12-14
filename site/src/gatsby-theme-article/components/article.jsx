import React from "react"
import ArticleBase from "gatsby-theme-article/src/components/article"
import Layout from "../../components/layout"

const Article = (props) => {
  return (
    <Layout>
      <ArticleBase {...props} />
    </Layout>
  )
}

export default Article
