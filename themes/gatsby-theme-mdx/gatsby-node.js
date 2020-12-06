const path = require(`path`);

exports.onCreateNode = require("./gatsby/on-create-node");

/*
const excludePage = ({ aside, fragment }) => {
  if (aside !== null) {
    return true;
  }
  if (fragment !== null) {
    return true;
  }
  return false;
};

const createMdxPage = (translations, createPage, node, defaultComponent) => {
  let comp = node.frontmatter.layout
    ? path.resolve(`./src/templates/${node.frontmatter.layout}.jsx`)
    : defaultComponent;
  if (!fs.existsSync(comp)) {
    comp = defaultComponent;
  }
  let languages = [node.fields.language];

  if (languages.includes("xx")) {
    languages = ["fr", "en"];
  }

  languages.forEach((lang) => {
    const path = "/" + lang + node.fields.slug;
    createPage({
      path: path,
      component: comp,
      context: {
        slug: node.fields.slug,
        language: lang,
        translations,
      },
    });
  });
};
*/

/*
exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions;
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
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`);
    return;
  }
  const defaultComponent = path.resolve(`./src/templates/DefaultLayout.jsx`);
  const edges = result.data.allMdx.edges;
  const allTranslations = ["fr", "en"];
  edges.forEach(({ node }) => {
    if (!excludePage(node.frontmatter)) {
      // translations is the list of languages this page exists in
      const translations = edges
        .filter((e) => e.node.fields.slug === node.fields.slug)
        .map((e) => e.node.fields.language);
      createMdxPage(
        translations.includes("xx") ? allTranslations : translations,
        createPage,
        node,
        defaultComponent
      );
    }
  });
};
*/

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createSchemaCustomization = require("./gatsby/create-schema-customization");
