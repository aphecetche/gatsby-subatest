import React, { Suspense } from "react"
import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { usePageContext } from "gatsby-theme-intl"
const createComponent = (componentName) => {
  const Component = React.lazy(() =>
    import(`components/asides/${componentName}`)
  )
  return Component
}

const MdxAsides = ({ asides }) => {
  return asides.map((m) => {
    const Component = m.node.childMdx.frontmatter.component
      ? createComponent(`${m.node.childMdx.frontmatter.component}`)
      : MDXRenderer
    return (
      <aside key={m.node.id}>
        <Component>{m.node.childMdx.body}</Component>
      </aside>
    )
  })
}

const JsAsides = ({ asides }) => {
  return asides.map((m) => {
    let cname = m.node.relativePath.split(".").slice(0, -1).join(".")
    const Component = createComponent(cname)
    return <Component key={m.node.id} />
  })
}

const Asides = ({ regexp }) => {
  const { language: currentLanguage } = usePageContext()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/^md$|^mdx$|^js$|^jsx$/" } }) {
        edges {
          node {
            relativePath
            id
            childMdx {
              fields {
                language
              }
              body
              frontmatter {
                component
                aside
              }
            }
          }
        }
      }
    }
  `)

  const isSSR = typeof window === "undefined"
  if (isSSR) {
    return null
  }

  const re = new RegExp(regexp)
  const mdxAsides = data.allFile.edges.filter(
    (n) =>
      n.node.relativePath.match(re) &&
      n.node.childMdx &&
      n.node.childMdx.frontmatter.aside === true &&
      n.node.childMdx.fields.language === currentLanguage
  )
  const jsAsides = data.allFile.edges.filter(
    (n) => n.node.relativePath.match(re) && n.node.childMdx === null
  )

  return (
    <Suspense fallback=<p>Loading...</p>>
      <>
        <MdxAsides asides={mdxAsides} />
        <JsAsides asides={jsAsides} />
      </>
    </Suspense>
  )
}

Asides.propTypes = {
  regexp: PropTypes.string.isRequired,
}
export default Asides
