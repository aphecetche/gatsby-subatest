exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/titi",
    toPath: "/toto/",
    isPermanent: false,
    redirectInBrowser: process.env.NODE_ENV === "development",
  });
};

/* exports.createSchemaCustomization = ({ actions }) => {
  console.log("test-gatsby-theme-mdx createSchemaCustomization");
};
 */
