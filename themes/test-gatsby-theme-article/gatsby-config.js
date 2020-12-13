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
      resolve: `gatsby-theme-article`,
      options: {
        sources: [`${__dirname}/src/dir1`, `${__dirname}/src/dir2`],
      },
    },
  ],
}
