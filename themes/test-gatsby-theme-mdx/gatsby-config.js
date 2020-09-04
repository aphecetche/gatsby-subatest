module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-mdx`,
      options: {
        sources: [`${__dirname}/src/pages`],
      },
    },
  ],
};
