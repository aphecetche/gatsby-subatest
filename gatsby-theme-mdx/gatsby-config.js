module.exports = (themeOptions) => {
  const options = Object.keys(themeOptions).length
    ? themeOptions
    : {
        sources: [`${__dirname}/src`],
      };
  const sources = options.sources.map((s) => ({
    resolve: `gatsby-source-filesystem`,
    options: {
      path: s,
    },
  }));
  return {
    plugins: [
      ...sources,
      {
        resolve: `gatsby-remark-images`,
      },

      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
        },
      },
    ],
  };
};
