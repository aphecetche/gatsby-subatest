/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")
const fs = require("fs")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === "Mdx") {
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: "slug",
      value: slug,
    })
  }
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              aside
              layout
            }
            fields {
              slug
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
  const defaultComponent = path.resolve(`./src/templates/default.jsx`)
  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.aside !== null) {
      return
    }
    let layout = node.frontmatter.layout
    if (!layout) {
      layout = "default"
    }
    let comp = path.resolve(`./src/templates/${layout}.jsx`)
    if (!fs.existsSync(comp)) {
      comp = defaultComponent
    }
    createPage({
      path: node.fields.slug,
      component: comp,
      context: {
        slug: node.fields.slug,
      },
    })
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
