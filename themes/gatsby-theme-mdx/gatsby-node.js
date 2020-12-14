exports.pluginOptionsSchema = ({ Joi }) => {
  return Joi.object({
    sources: Joi.array()
      .items({
        name: Joi.string(),
        path: Joi.string(),
        ignore: Joi.array().items(
          Joi.string(),
          Joi.object().regex(),
          Joi.function()
        ),
      })
      .description(
        "array of sources where to look for md(x) files (and fed to gatsby-source-filesystem plugin)"
      ),
  })
}
