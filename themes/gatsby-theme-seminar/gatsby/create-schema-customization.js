module.exports = ({ actions, schema, reporter }) => {
  reporter.info("gatsby-theme-seminar createSchemaCustomization")
  const { createTypes } = actions

  createTypes(`interface Seminar @nodeInterface {
    id: ID!
    type: String!
    title:  String!
    title2: String
    slug: String
    location: String
    layout: String
    fileAbsolutePath: String
    date: String
    author2: String
    author: String
    author_url2: String
    author_url: String
    author_filiation2: String
    author_filiation: String
    author_filiation_url2: String
    author_filiation_url: String
    body: String!
  }
  `)

  const seminar = schema.buildObjectType({
    name: "MdxSeminar",
    fields: {
      id: { type: `ID!` },
      type: { type: "String!" },
      title: { type: "String!" },
      title2: { type: "String" },
      slug: { type: "String" },
      location: { type: "String" },
      layout: { type: "String" },
      fileAbsolutePath: { type: "String" },
      date: { type: "String" },
      author2: { type: "String" },
      author: { type: "String" },
      author_url2: { type: "String" },
      author_url: { type: "String" },
      author_filiation2: { type: "String" },
      author_filiation: { type: "String" },
      author_filiation_url2: { type: "String" },
      author_filiation_url: { type: "String" },
      body: {
        type: "String!",
        resolve(source, args, context, info) {
          const type = info.schema.getType(`Mdx`)
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent,
          })
          const resolver = type.getFields()["body"].resolve
          return resolver(mdxNode, {}, context, {
            fieldName: "body",
          })
        },
      },
      rawBody: { type: "String!" },
    },
    interfaces: [`Node`, `Seminar`],
    extensions: {
      infer: false,
    },
  })
  createTypes(seminar)
}
