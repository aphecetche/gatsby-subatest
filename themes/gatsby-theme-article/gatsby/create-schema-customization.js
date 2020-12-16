const path = require("path")

module.exports = ({ actions, schema, reporter }) => {
  reporter.info("gatsby-theme-article createSchemaCustomization")
  const { createTypes } = actions

  createTypes(`interface Article @nodeInterface {
  id: ID!
  title: String!
  slug: String!
  category: String
  component: String
  layout: String
  rank: Int
  images: [File]
  fragment: Boolean
  language: String
  fileAbsolutePath: String
  body: String
  path: String
  }`)

  const article = schema.buildObjectType({
    name: "MdxArticle",
    fields: {
      id: { type: `ID!` },
      title: { type: "String!" },
      slug: { type: "String!" },
      category: { type: "String" },
      component: { type: "String" },
      layout: { type: "String" },
      rank: { type: "Int" },
      path: {
        type: "String",
        resolve(source /*args,*/ /*context*/ /*,info*/) {
          const dir = path.dirname(source.fileAbsolutePath)
          return dir
        },
      },
      images: {
        type: "[File]",
        resolve(source, args, context /*,info*/) {
          const dir = path.dirname(source.fileAbsolutePath)
          const fileNodes = context.nodeModel.getAllNodes({ type: `File` })
          const res =
            (source.images &&
              source.images.map((img) => {
                const imgpath = path.join(dir, img)
                for (const file of fileNodes) {
                  if (file.absolutePath === imgpath) {
                    return file
                  }
                }
              })) ||
            []
          return res
        },
      },
      fragment: {
        type: "Boolean",
      },
      language: { type: "String" },
      fileAbsolutePath: { type: "String" },
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
    interfaces: [`Node`, `Article`],
    extensions: {
      infer: false,
    },
  })
  createTypes(article)
}
