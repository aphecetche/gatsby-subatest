module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-menu`,
      options: {
        sources: [
          {
            path: `${__dirname}/src/dir1`,
          },
          {
            path: `${__dirname}/src/dir2`,
          },
        ],
      },
    },
  ],
}
