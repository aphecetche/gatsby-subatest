module.exports = ({ Joi }) => {
  return Joi.object({
    seminarLayout: Joi.string()
      .description(
        "full path to seminar layout md(x) file to use for one single seminar"
      )
      .default(`${__dirname}/../src/templates/seminar-query.js`),
    seminarListLayout: Joi.string()
      .description(
        "full path to layout md(x) file to use for the list of seminars"
      )
      .default(`${__dirname}/../src/templates/seminars-query.js`),
  })
}
