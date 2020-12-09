module.exports = ({ actions, schema, reporter }) => {
  reporter.info("gatsby-theme-seminar createSchemaCustomization");
  const { createTypes } = actions;

  const seminar = schema.buildObjectType({
    name: "Seminar",
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
  createTypes(seminar);
};
