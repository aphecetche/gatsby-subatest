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
  })
}
