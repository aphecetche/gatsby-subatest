module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: themeOptions.name || "content",
          path: themeOptions.path || `${__dirname}/src/examples`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
        },
      },
      {
        resolve: "gatsby-theme-mui",
        options: {},
      },
    ],
  };
};
