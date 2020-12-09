import React from "react"
import Featured from "components/Featured"
import Layout from "components/Layout"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { graphql } from "gatsby"
import PropTypes from "prop-types"
import { usePageContext, getTranslatedContent } from "gatsby-theme-intl"

const items = [
  {
    title: "zob",
    content: <p>that would be zob</p>,
  },
]
const HomePage = ({ data }) => {
  const { language } = usePageContext()
  const { node: head } = getTranslatedContent(data.allArticle.nodes, language)
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
