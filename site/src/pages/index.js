import React from "react"
import Featured from "components/featured"
import Layout from "components/layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { usePageContext, getTranslatedContent } from "gatsby-theme-intl"

const items = [
  {
    title: "zob",
    content: <p>that would be the zob content</p>,
  },
  {
    title: "zib",
    content: <h3>that would be the zib content</h3>,
  },
]
const HomePage = ({ data }) => {
  const { language } = usePageContext()
  let head = null
  if (data.allArticle) {
    const { node } = getTranslatedContent(data.allArticle.nodes, language)
    head = node
  }
  return (
    <Layout>
      {head && <MDXRenderer>{head.body}</MDXRenderer>}
      <Featured items={items} />
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

export const query = graphql`
  query {
    allArticle(filter: { slug: { eq: "/general/presentation/" } }) {
      nodes {
        ...articleContent
      }
    }
  }
`
