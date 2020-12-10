const path = require(`path`)

exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    sources: Joi.array()
      .items(Joi.string())
      .description("array of paths where to look for md(x) files"),
  })
}

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, "src"), "node_modules"],
    },
  })
}
