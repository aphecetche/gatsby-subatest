module.exports = ({ actions, schema }) => {
  console.log("gatsby-theme-mdx createSchemaCustomization");
  const { createTypes } = actions;

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
      images: { type: "[String]" },
      fragment: { type: "Boolean" },
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
      rawBody: { type: "String!" },
    },
    interfaces: [`Node`],
  });
  createTypes(article);
};
