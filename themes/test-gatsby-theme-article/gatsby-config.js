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
        sources: [
          {
            /* urls of the files in dir1 will start at /url1 */
            name: "url1",
            path: `${__dirname}/src/dir1`,
          },
          {
            /* name is _not_ given so urls of the files in dir2 be starting at /, 
            (and not at dir2) */
            path: `${__dirname}/src/dir2`,
          },
        ],
      },
    },
  ],
}
