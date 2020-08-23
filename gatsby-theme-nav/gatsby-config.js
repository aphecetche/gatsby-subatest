module.exports = {
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/images`,
      },
    },
    {
      resolve: "gatsby-theme-mui",
      options: {},
    },
  ],
};
