const path = require("path")
const fs = require("fs")
const intl = require("gatsby-theme-intl/src/helpers/slug")

const excludePage = ({ aside, fragment }) => {
  if (aside !== null) {
    return true
  }
  if (fragment !== null) {
    return true
  }
  return false
}

const createMdxPage = (
  translations,
  createPage,
  node,
  defaultComponent,
  reporter
) => {
  let comp = node.layout
    ? path.resolve(`./src/templates/${node.layout}.jsx`)
    : defaultComponent
  if (!fs.existsSync(comp)) {
    comp = defaultComponent
  }
  let languages = [node.language]

  if (languages.includes("xx")) {
    languages = ["fr", "en"]
  }

  languages.forEach((lang) => {
    const path = "/" + lang + node.slug
    const p2 = intl.localizeSlug(node.slug, lang)
    if (path !== p2) {
      reporter.panic(`p2=${p2} != path=${path}`)
    }
    reporter.verbose(" ".repeat(34) + "> page : " + path)
    createPage({
      path: path,
      component: comp,
      context: {
        id: node.id,
        language: lang,
        fileDir: node.path,
        slug: node.slug,
        translations, //FIXME: this should be a list of ids simply ?
      },
    })
  })
}

module.exports = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allArticle {
        nodes {
          aside
          fragment
          layout
          id
          slug
          language
          path
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`)
    return
  }

  // note that the defaultLayout component must be a data-fetching
  // wrapper that import the display component(s), see the example
  // provided in templates/article-query.js
  const defaultComponent = path.resolve(options.articleLayout)
  const nodes = result.data.allArticle.nodes
  const allTranslations = ["fr", "en"]
  nodes.forEach((node) => {
    if (!excludePage(node)) {
      // translations is the list of languages this page exists in
      const translations = nodes
        .filter((e) => e.slug === node.slug)
        .map((e) => e.language)
      reporter.info(
        `gatsby-theme-article create-pages : dealing with node ${node.slug} ${
          node.language
        } ${JSON.stringify(translations)} `
      )
      createMdxPage(
        translations.includes("xx") ? allTranslations : translations,
        createPage,
        node,
        defaultComponent,
        reporter
      )
    }
  })

  // create also a page for all articles (useful e.g. for debugging)
  const languages = ["fr", "en"]
  languages.forEach((lang) =>
    createPage({
      path: "/" + lang + "/articles",
      component: path.resolve(options.articlesLayout),
      context: {
        language: lang,
        slug: "/articles",
      },
    })
  )
}
