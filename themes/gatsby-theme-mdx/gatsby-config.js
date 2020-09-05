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
  // Mind your steps : order of remark- plugins _IS_ important
  return {
    plugins: [
      ...sources,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-remark-embed-video`,
      `gatsby-remark-responsive-iframe`,
      `gatsby-remark-images`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          gatsbyRemarkPlugins: [
            {
              resolve: `gatsby-remark-embed-video`,
            },
            {
              resolve: `gatsby-remark-responsive-iframe`,
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1200,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {},
            },
          ],
          extensions: [".mdx", ".md"],
        },
      },
    ],
  };
};
