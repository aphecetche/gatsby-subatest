const path = require("path")

/** Loop over seminar nodes and create one page per seminar.
 *
 * For the moment uses only the defaultLayout
 * (i.e. disregard the layout frontmatter field that may exist in the seminar markdown file)
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allSeminar {
        nodes {
          id
          slug
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`)
    return
  }

  // create one page per seminar
  result.data.allSeminar.nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: path.resolve(options.seminarLayout),
      context: {
        id: node.id,
      },
    })
  })

  // create page for list of seminars
  createPage({
    path: "/seminars",
    component: path.resolve(options.seminarListLayout),
    context: {},
  })
}
