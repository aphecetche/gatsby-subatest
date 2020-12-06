import React from "react"
import { graphql } from "gatsby"
import MainLayout from "./MainLayout"
import { getTranslatedContent } from "gatsby-theme-intl"
import MdxContentWithEmbeddedImages from "components/MdxContentWithEmbeddedImages"
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
  let main = node ? <MdxContentWithEmbeddedImages node={node} /> : null
  let aside = node ? getAsideContent(node.fields.slug, node.frontmatter) : null
  return <MainLayout main={main} aside={aside} pageContext={pageContext} />
}

export const mdxContent = graphql`
  fragment mdxFrontMatterImages on File {
    childImageSharp {
      original {
        src
      }
      fluid(quality: 90) {
        ...GatsbyImageSharpFluid
      }
    }
  }
  fragment mdxContent on Mdx {
    fields {
      language
      slug
    }
    frontmatter {
      title
      layout
      asides
      images {
        ...mdxFrontMatterImages
      }
    }
    id
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
