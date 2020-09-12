module.exports = {
  siteMetadata: {
    title: `Laboratoire Subatech`,
    description: `Les activités de recherche de SUBATECH gravitent autour d’un domaine, le Nucléaire, que ce soit dans ses aspects les plus fondamentaux ou très appliqués, tant expérimentaux que théoriques, avec des recherches menées à la fois dans le domaine de la Physique Nucléaire et de la Chimie Nucléaire`,
    author: `L. Aphecetche`,
  },
  plugins: [
    {
      resolve: `gatsby-theme-mdx`,
      options: {
        sources: [
          `${__dirname}/src/content`,
          `${__dirname}/src/pages`,
          `${__dirname}/src/components/asides`,
        ],
      },
    },
    {
      resolve: "gatsby-theme-mui",
      options: {},
    },
    // `gatsby-theme-search`,
    {
      resolve: "gatsby-theme-ldap",
      options: {
        disabled: !(process.env.WITHLDAP === "yes"),
      },
    },
    {
      resolve: `gatsby-theme-intl`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-netlify`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-meta-redirect`,
      options: {},
    },
  ],
}
