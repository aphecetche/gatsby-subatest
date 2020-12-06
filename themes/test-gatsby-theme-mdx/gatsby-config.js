module.exports = {
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "decoy",
        path: `${__dirname}/src/dir3`,
      },
    },
    {
      resolve: `gatsby-theme-mdx`,
      options: {
        sources: [`${__dirname}/src/dir1`],
      },
    },
    /*     {
      resolve: `gatsby-theme-mdx`,
      options: {
        sources: [`${__dirname}/src/pages`],
      },
    },
 */ {
      resolve: `gatsby-plugin-mdx`,
    },
  ],
};
