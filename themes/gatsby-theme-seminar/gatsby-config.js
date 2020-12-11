module.exports = (themeOptions) => {
  return {
    plugins: [
      "gatsby-theme-intl",
      {
        resolve: `gatsby-theme-mdx`,
        options: themeOptions,
      },
    ],
  }
}
