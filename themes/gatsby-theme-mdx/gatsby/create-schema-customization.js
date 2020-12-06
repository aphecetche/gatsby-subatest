module.exports = ({ actions, schema }) => {
  console.log("gatsby-theme-mdx createSchemaCustomization");
  const { createTypes } = actions;

  /*   const article = `
    type Article implements Node {
     title: String!
     category: String
     component: String
     asides: [String]
     fragment: Boolean
     aside: Boolean
     images: [File]       
     layout: String
     order: Int
     slug: String!
     rawBody: String
    }`;
   */
  const article = schema.buildObjectType({
    name: "Article",
    fields: {
      id: { type: `ID!` },
      title: { type: "String!" },
      slug: { type: "String" },
      category: { type: "String" },
      component: { type: "String" },
      asides: { type: "[String]" },
      layout: { type: "String" },
      order: { type: "Int" },
      aside: { type: "Boolean" },
      images: {
        type: "[File]",
        resolve(source, args, context, info) {
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent,
          });
          const type = info.schema.getType("MdxFrontmatter");
          const images = type.getFields()["frontmatter"]["images"];
          if (images) {
            return images.resolve(mdxNode, {}, context, {
              fieldName: "frontmatter",
            });
          }
          return null;
        },
      },
      body: {
        type: "String!",
        resolve(source, args, context, info) {
          const type = info.schema.getType(`Mdx`);
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent,
          });
          const resolver = type.getFields()["body"].resolve;
          return resolver(mdxNode, {}, context, {
            fieldName: "body",
          });
        },
      },
      rawBody: {
        type: "String!",
        resolve(source, args, context, info) {
          const type = info.schema.getType(`Mdx`);
          const mdxNode = context.nodeModel.getNodeById({
            id: source.parent,
          });
          const resolver = type.getFields()["rawBody"].resolve;
          return resolver(mdxNode, {}, context, {
            fieldName: "rawBody",
          });
        },
      },
    },
    interfaces: [`Node`],
  });
  createTypes(article);
};
