module.exports = {
  plugins: [
    `gatsby-theme-seminar`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/seminars`,
      },
    },
  ],
}
