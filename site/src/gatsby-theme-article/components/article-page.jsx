import React from "react"
import PropTypes from "prop-types"
import Article from "gatsby-theme-article/src/components/article"
import Layout from "../../components/layout"
import MainWithAside from "../../layouts/main-with-aside"
import Menu from "gatsby-theme-menu/src/components/menu"

const ArticlePage = ({ data, pageContext }) => {
  const { article, menu } = data
  let aside = null
  if (menu) {
    aside = <Menu {...menu} />
  }
  const main = <Article article={article} pageContext={pageContext} />
  return (
    <Layout>
      <MainWithAside main={main} aside={aside} />
    </Layout>
  )
}

ArticlePage.propTypes = {
  data: PropTypes.shape({
    article: PropTypes.object.isRequired,
    menu: PropTypes.object,
  }),
  toto: PropTypes.object,
  pageContext: PropTypes.shape({
    language: PropTypes.string,
    translations: PropTypes.arrayOf(PropTypes.string),
  }),
}

export default ArticlePage
