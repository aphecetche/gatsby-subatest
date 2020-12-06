const path = require(`path`);

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === "Mdx") {
    const isSeminar = /seminars/.test(path.dirname(node.fileAbsolutePath));
    createNodeField({
      node,
      name: "seminar",
      value: isSeminar,
    });
  }
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};

exports.createSchemaCustomization = ({ actions }) => {
  console.log("gatsby-theme-seminar createSchemaCustomization");
  const { createTypes } = actions;
  const typeDefs = `
    type MdxSeminarFrontMatter implements MdxFrontMatter {
      title: String!
      title2: String
      author: String
    }
  `;
  createTypes(typeDefs);
};
