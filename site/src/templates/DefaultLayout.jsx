import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./MainLayout"
import { getTranslatedContent } from "gatsby-theme-intl"
import MdxContent from "components/MdxContent"
import Asides from "components/Asides"

const getAsideContent = (slug, frontmatter) => {
  let aside = null

  if (frontmatter.asides) {
    aside = frontmatter.asides.map((a, i) => (
      <Asides slug={slug} key={i} regexp={a} />
    ))
  }

  return aside
}

const DefaultLayout = (props) => {
  const { data, pageContext } = props
  const { language } = pageContext
  const { node } = getTranslatedContent(data.allMdx.edges, language)
  let main = null
  let aside = null
  if (node) {
    main = (
      <>
        {main}
        <MdxContent title={node.frontmatter.title} body={node.body} />
      </>
    )
    aside = getAsideContent(node.fields.slug, node.frontmatter)
  }

  return <MainLayout main={main} aside={aside} pageContext={pageContext} />
}

export const mdxContent = graphql`
  fragment mdxContent on Mdx {
    fields {
      language
      slug
    }
    frontmatter {
      title
      layout
      asides
    }
    body
  }
`

export const query = graphql`
  query allTranslations($slug: String!) {
    allMdx(filter: { fields: { slug: { eq: $slug } } }) {
      edges {
        node {
          ...mdxContent
        }
      }
    }
  }
`

export default DefaultLayout
