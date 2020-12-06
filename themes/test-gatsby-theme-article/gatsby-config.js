module.exports = {
  plugins: [
    `gatsby-theme-article`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        /* urls of the files in dir1 will start at /url1 */
        name: "url1",
        path: `${__dirname}/src/dir1`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        /* name is _not_ given so urls of the files in dir2 be starting at /, 
            (and not at dir2) */
        path: `${__dirname}/src/dir2`,
      },
    },
  ],
}
