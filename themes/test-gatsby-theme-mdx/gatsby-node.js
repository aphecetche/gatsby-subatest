exports.createPages = async ({ actions }) => {
  const { createRedirect } = actions;
  createRedirect({
    fromPath: "/",
    toPath: "/toto/",
    isPermanent: false,
    redirectInBrowser: process.env.NODE_ENV === "development",
  });
};
