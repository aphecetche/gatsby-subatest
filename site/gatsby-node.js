/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require(`path`)
const { createFilePath } = require("gatsby-source-filesystem")

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

exports.createPages = async ({ actions, graphql }) => {
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
    console.log(result.errors)
  }
  result.data.allMdx.edges.forEach(({ node }) => {
    if (node.frontmatter.aside === null) {
      let layout = node.frontmatter.layout
      if (!layout) {
        layout = "default"
      }
      console.log(node.fields.slug, "->", layout)
      createPage({
        path: node.fields.slug,
        component: path.resolve(`./src/templates/${layout}.jsx`),
        context: {
          slug: node.fields.slug,
        },
      })
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
