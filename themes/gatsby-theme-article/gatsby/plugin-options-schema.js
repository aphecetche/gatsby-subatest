module.exports = ({ Joi }) => {
  return Joi.object({
    articleLayout: Joi.string()
      .description(
        "full patch to default layout md(x) file to use for single articles"
      )
      .default(`${__dirname}/../src/templates/article-query.js`),
    articlesLayout: Joi.string()
      .description(
        "full patch to default layout md(x) file to use for all articles"
      )
      .default(`${__dirname}/../src/templates/articles-query.js`),

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
      .description("array of sources where to look for md(x) article files"),
  })
}
