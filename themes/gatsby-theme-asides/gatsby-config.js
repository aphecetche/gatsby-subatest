module.exports = (themeOptions) => {
  return {
    plugins: [
      {
        resolve: `gatsby-theme-mdx`,
        options: {
          sources: themeOptions.sources || "content",
        },
      },
      {
        resolve: "gatsby-theme-mui",
      },
    ],
  };
};
