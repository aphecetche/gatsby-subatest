module.exports = {
  plugins: [
    `gatsby-theme-menu`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/dir1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/dir2`,
      },
    },
  ],
}
