module.exports = ({ actions, reporter }) => {
  reporter.info("gatsby-theme-menu createSchemaCustomization")
  const { createTypes } = actions

  createTypes(`type Link {
    name: String
    to: String
  }`)

  createTypes(`type Menu implements Node @dontInfer {
  id: ID!
  language: String!
  title: String!
  links: [Link]
  rank: Int
  path: String!
  }`)
}
