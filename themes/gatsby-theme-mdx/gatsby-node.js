const path = require(`path`);

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    defaultLayout: Joi.string()
      .description(
        "full patch to default layout md(x) file to use for articles"
      )
      .default(`${__dirname}/../layouts/default.jsx`),
    sources: Joi.array()
      .items(Joi.string())
      .description("array of paths where to look for md(x) files"),
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  });
};
