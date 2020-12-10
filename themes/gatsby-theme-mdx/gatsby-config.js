module.exports = (themeOptions) => {
  const sources = themeOptions.sources.map((s) => ({
    resolve: `gatsby-source-filesystem`,
    options: {
      path: s,
    },
  }))
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
              resolve: `gatsby-remark-image-attributes`,
              options: {
                dataAttributes: true,
              },
            },
            {
              resolve: `gatsby-remark-copy-linked-files`,
              options: {
                ignoreFileExtensions: ["png", "jpg", "jpeg"],
              },
            },
            {
              resolve: `gatsby-remark-images`,
              options: {
                maxWidth: 1000,
              },
            },
          ],
          extensions: [".mdx", ".md"],
        },
      },
    ],
  }
}
