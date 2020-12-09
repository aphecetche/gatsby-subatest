const path = require(`path`);

exports.pluginOptionsSchema = require("./gatsby/plugin-options-schema");

exports.createSchemaCustomization = require("./gatsby/create-schema-customization");

exports.onCreateNode = require("./gatsby/on-create-node");

exports.createPages = require("./gatsby/create-pages");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
