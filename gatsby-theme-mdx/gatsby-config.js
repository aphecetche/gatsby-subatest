module.exports = (themeOptions) => {
  // const options = themeOptions || { sources: ["content"] };
  // const sources = options.sources.map((s) => ({
  //   resolve: `gatsby-source-filesystem`,
  //   options: {
  //     path: `${__dirname}/src/${s}`,
  //   },
  // }));
  // console.log("theme-mdx sources=", sources);
  return {
    plugins: [
      //      ...sources,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `content`,
          //.path: `${__dirname}/src/content`,
          path: `zob`,
        },
      },
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [".mdx", ".md"],
        },
      },
    ],
  };
};
