module.exports = {
  siteMetadata: {
    title: `Laboratoire Subatech`,
    description: `Les activités de recherche de SUBATECH gravitent autour d’un domaine, le Nucléaire, que ce soit dans ses aspects les plus fondamentaux ou très appliqués, tant expérimentaux que théoriques, avec des recherches menées à la fois dans le domaine de la Physique Nucléaire et de la Chimie Nucléaire`,
    author: `L. Aphecetche`,
  },
  /* a note on the (custom) gatsby-theme-XXX : one can not actually comment them out
   * (e.g. for testing) as many queries in the site require their corresponding types to be defined.
   *
   * What can be done though (again, for testing only) is to comment out some of their sources
   * option so not all data input will be available to them. But you should get at least
   * one data source of type MD(X) otherwise nothing will work...
   *
   * */
  plugins: [
    "gatsby-theme-mui",
    {
      resolve: `gatsby-theme-article`,
      options: {
        sources: [
          `${__dirname}/src/pages`,
          /*          `${__dirname}/src/content`,
          `${__dirname}/src/components/asides`, */
        ],
      },
    },
    {
      resolve: `gatsby-theme-seminar`,
      options: {
        sources: [], // [`${__dirname}/src/seminars/2020`],
      },
    },
    {
      resolve: "gatsby-theme-ldap",
      options: {
        disabled: !(process.env.WITHLDAP === "yes"),
      },
    },
    // `gatsby-theme-search`,
    `gatsby-theme-intl`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-meta-redirect`,
  ],
}
