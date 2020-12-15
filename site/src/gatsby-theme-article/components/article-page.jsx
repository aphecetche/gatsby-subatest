import React from "react"
import PropTypes from "prop-types"
import Article from "gatsby-theme-article/src/components/article"
import Layout from "../../components/layout"

const ArticlePage = ({ data, pageContext }) => {
  const { article, menu } = data
  let aside = null
  if (menu) {
    aside = <pre>toto={JSON.stringify(menu)}</pre>
  }
  return (
    <Layout>
      <div style={{ border: "5px solid pink" }}>
        <Article article={article} pageContext={pageContext} menu={menu} />
      </div>
      {aside}
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
