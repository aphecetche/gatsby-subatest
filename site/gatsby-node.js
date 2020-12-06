/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const fs = require("fs")
const { createFilePath } = require("gatsby-source-filesystem")

const validFilePath = (path) => {
  const re = /(\.en\/$)|(\.fr\/$)|(\.xx\/$)/
  return path.search(re) >= 0
}

const extractLanguage = (slug) => {
  const s = slug.replace(/\/$/, "").split(".")
  return s[s.length - 1]
}

exports.onCreateNode = ({ node, getNode, actions, reporter, createNodeId }) => {
  const { createNodeField, createNode } = actions
  if (node.internal.type === "Mdx") {
    const localizedSlug = createFilePath({ node, getNode })
    if (!validFilePath(localizedSlug)) {
      reporter.panic(
        localizedSlug +
          " is not a valid slug : missing the .fr | .en | .xx extension"
      )
    }
    const language = extractLanguage(localizedSlug)
    const slug = localizedSlug.replace("." + language, "")
    addNodeField(createNodeField, node, slug, language)
  }
}

const addNodeField = (createNodeField, node, slug, language) => {
  createNodeField({
    node,
    name: "slug",
    value: slug,
  })
  createNodeField({
    node,
    name: "language",
    value: language,
  })
}

const excludePage = ({ aside, fragment }) => {
  if (aside !== null) {
    return true
  }
  if (fragment !== null) {
    return true
  }
  return false
}

const createMdxPage = (translations, createPage, node, defaultComponent) => {
  let comp = node.frontmatter.layout
    ? path.resolve(`./src/templates/${node.frontmatter.layout}.jsx`)
    : defaultComponent
  if (!fs.existsSync(comp)) {
    comp = defaultComponent
  }
  let languages = [node.fields.language]

  if (languages.includes("xx")) {
    languages = ["fr", "en"]
  }

  languages.forEach((lang) => {
    const path = "/" + lang + node.fields.slug
    createPage({
      path: path,
      component: comp,
      context: {
        slug: node.fields.slug,
        language: lang,
        translations,
      },
    })
  })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage, createRedirect } = actions
  //allMdx(filter: { fields: { slug: { regex: "/erdre/" } } }) {
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            fileAbsolutePath
            frontmatter {
              aside
              fragment
              layout
            }
            fields {
              slug
              language
            }
          }
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`)
    return
  }
  const defaultComponent = path.resolve(`./src/templates/DefaultLayout.jsx`)
  const edges = result.data.allMdx.edges
  const allTranslations = ["fr", "en"]
  edges.forEach(({ node }) => {
    if (!excludePage(node.frontmatter)) {
      // translations is the list of languages this page exists in
      const translations = edges
        .filter((e) => e.node.fields.slug === node.fields.slug)
        .map((e) => e.node.fields.language)
      createMdxPage(
        translations.includes("xx") ? allTranslations : translations,
        createPage,
        node,
        defaultComponent
      )
    }
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}

exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions

  if (!page.context.language) {
    // we don't have a language so it's not a Mdx page
    // so we must create versions for both translations

    console.log("Dealing with page ", page.path)
    deletePage(page)

    const routes = ["", "/fr", "/en"]
    routes.forEach((r) => {
      const path = r + page.path
      const newPage = {
        ...page,
        path: path,
        context: {
          ...page.context,
          slug: path,
          language: r ? r.replace(/\//, "") : "fr",
          // by default we assume that pages can handle both languages
          // TODO: how to disable some languages for some (non-mdx) pages ?
          translations: ["fr", "en"],
        },
      }
      createPage(newPage)
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type Mdx implements Node {
      frontmatter: MdxFrontmatter!
    }
    interface MdxFrontMatter {
      title: String!
    }
    type MdxContentFrontMatter implements MdxFrontMatter {
      title: String!
      category: String
      component: String
      asides: [String]
      fragment: Boolean
      aside: Boolean
      images: [File]       
      layout: String
      order: Int!
    }
    type MdxSeminarFrontMatter implements MdxFrontMatter {
      title: String!
      title2: String
      author: String
    }
  `
  createTypes(typeDefs)
}
