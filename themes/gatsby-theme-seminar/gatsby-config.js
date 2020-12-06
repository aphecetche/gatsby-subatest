module.exports = (themeOptions) => {
  const options = Object.keys(themeOptions).length
    ? themeOptions
    : {
        sources: [`${__dirname}/src`],
      };
  return {
    plugins: [
      "gatsby-theme-intl",
      {
        resolve: `gatsby-theme-mdx`,
        options,
      },
      {
        resolve: "gatsby-theme-mui",
        options: {},
      },
    ],
  };
};
