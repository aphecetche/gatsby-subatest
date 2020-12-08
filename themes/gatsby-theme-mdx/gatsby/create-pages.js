const path = require("path");
const fs = require("fs");

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
  let comp = node.layout
    ? path.resolve(`./src/templates/${node.layout}.jsx`)
    : defaultComponent;
  if (!fs.existsSync(comp)) {
    comp = defaultComponent;
  }
  let languages = [node.language];

  if (languages.includes("xx")) {
    languages = ["fr", "en"];
  }

  languages.forEach((lang) => {
    const path = "/" + lang + node.slug;
    createPage({
      path: path,
      component: comp,
      context: {
        slug: node.slug,
        language: lang,
        translations,
      },
    });
  });
};

module.exports = async ({ actions, graphql, reporter }, options) => {
  console.log("create-pages options=", options);
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allArticle {
        nodes {
          aside
          fragment
          layout
          slug
          language
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query in createPages.`);
    return;
  }
  const defaultComponent = path.resolve(options.defaultLayout);
  const nodes = result.data.allArticle.nodes;
  console.log("nodes=", JSON.stringify(nodes, null, 4));
  const allTranslations = ["fr", "en"];
  nodes.forEach((node) => {
    if (!excludePage(node)) {
      // translations is the list of languages this page exists in
      const translations = nodes
        .filter((e) => e.slug === node.slug)
        .map((e) => e.language);
      createMdxPage(
        translations.includes("xx") ? allTranslations : translations,
        createPage,
        node,
        defaultComponent
      );
    }
  });
};
