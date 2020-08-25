module.exports = {
  siteMetadata: {
    title: `Laboratoire Subatech`,
    description: `Les activités de recherche de SUBATECH gravitent autour d’un domaine, le Nucléaire, que ce soit dans ses aspects les plus fondamentaux ou très appliqués, tant expérimentaux que théoriques, avec des recherches menées à la fois dans le domaine de la Physique Nucléaire et de la Chimie Nucléaire`,
    author: `L. Aphecetche`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        // gatsbyRemarkPlugins: [
        //   {
        //     resolve: `gatsby-remark-relative-images`,
        //   },
        //   {
        //     resolve: "gatsby-remark-images",
        //     options: {
        //       maxWidth: 800,
        //     },
        //   },
        //   "gatsby-remark-static-images",
        // ],
      },
    },
    {
      resolve: "gatsby-theme-mui",
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
          ],
        },
      },
    },
    //`gatsby-plugin-sharp`,
    //`gatsby-transformer-sharp`,
    // `gatsby-theme-search`,
    // {
    //   resolve: "gatsby-theme-ldap",
    //   options: {
    //     disabled: !(process.env.WITHLDAP === "yes"),
    //   },
    // },
  ],
}
