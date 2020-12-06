module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-material-ui",
      options: {},
    },
    {
      resolve: "gatsby-plugin-webfonts",
      options: {
        fonts: {
          google: [
            {
              family: "Open Sans Condensed",
              variants: ["300", "700"],
            },
            {
              family: "Open Sans",
              variants: ["300", "400", "700", "800"],
              formats: ["svg", "woff2", "woff"],
            },
          ],
        },
      },
    },
  ],
}
