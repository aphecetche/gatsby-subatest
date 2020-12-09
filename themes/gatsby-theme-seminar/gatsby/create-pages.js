const path = require("path");

/** Loop over seminar nodes and create one page per seminar.
 *
 * For the moment uses only the defaultLayout
 * (i.e. disregard the layout frontmatter field that may exist in the seminar markdown file)
 */
module.exports = async ({ actions, graphql, reporter }, options) => {
  reporter.info(
    `gatsby-theme-seminar create-pages options=${JSON.stringify(
      options,
      null,
      4
    )}`
  );
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSeminar {
        nodes {
          slug
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`);
    return;
  }
  const defaultComponent = path.resolve(options.defaultLayout);
  const nodes = result.data.allSeminar.nodes;
  nodes.forEach((node) => {
    createPage({
      path: node.slug,
      component: defaultComponent,
      context: {
        slug: node.slug,
      },
    });
  });
};
