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
    const Component = m.component
      ? createComponent(`${m.component}`)
      : MDXRenderer
    return (
      <aside key={m.id}>
        <Component>{m.body}</Component>
      </aside>
    )
  })
}

const JsAsides = ({ asides }) => {
  return asides.map((m) => {
    let cname = m.relativePath.split(".").slice(0, -1).join(".")
    const Component = createComponent(cname)
    return <Component key={m.id} />
  })
}

const Asides = ({ regexp }) => {
  const { language: currentLanguage } = usePageContext()
  const data = useStaticQuery(graphql`
    query {
      allFile(filter: { extension: { regex: "/^js$|^jsx$/" } }) {
        nodes {
          relativePath
          id
        }
      }
      allArticle {
        nodes {
          fileAbsolutePath
          id
          language
          body
          component
          aside
        }
      }
    }
  `)

  const isSSR = typeof window === "undefined"
  if (isSSR) {
    return null
  }

  const re = new RegExp(regexp)
  const mdxAsides = data.allArticle.nodes.filter(
    (n) =>
      n.fileAbsolutePath.match(re) &&
      n.aside === true &&
      n.language === currentLanguage
  )
  const jsAsides = data.allFile.nodes.filter((n) => n.relativePath.match(re))

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
