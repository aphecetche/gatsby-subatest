module.exports = ({ Joi }) => {
  return Joi.object({
    articleLayout: Joi.string()
      .description(
        "full patch to default layout md(x) file to use for single articles"
      )
      .default(`${__dirname}/../src/templates/article-query.js`),
    sources: Joi.array()
      .items(Joi.string())
      .description("array of paths where to look for md(x) files"),
  })
}
