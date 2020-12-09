module.exports = ({ Joi }) => {
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
