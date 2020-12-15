module.exports = (themeOptions) => {
  const sources = themeOptions.sources.map((s) => ({
    resolve: `gatsby-source-filesystem`,
    options: {
      ...s,
    },
  }))
  return {
    plugins: [...sources],
  }
}
