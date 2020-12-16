module.exports = {
  flags: { PRESERVE_WEBPACK_CACHE: true, FAST_DEV: true },
  siteMetadata: {
    title: `Laboratoire Subatech`,
    description: `Les activités de recherche de SUBATECH gravitent autour d’un domaine, le Nucléaire, que ce soit dans ses aspects les plus fondamentaux ou très appliqués, tant expérimentaux que théoriques, avec des recherches menées à la fois dans le domaine de la Physique Nucléaire et de la Chimie Nucléaire`,
    author: `L. Aphecetche`,
  },
  /* a note on the (custom) gatsby-theme-XXX : one can not actually comment them out
   * (e.g. for testing) as many queries in the site require their corresponding _types_ to be defined.
   *
   * What can be done though (again, for testing only) is to comment out some of the gatsby-source-filesystem
   * plugins so not all data input will be available to them. But you should get at least
   * one data source of type MD(X) otherwise nothing will work...
   *
   * */
  plugins: [
    `gatsby-theme-mui`,
    `gatsby-theme-menu`,
    `gatsby-theme-article`,
    `gatsby-theme-seminar`,
    `gatsby-theme-intl`,
    `gatsby-theme-orgchart`,
    // `gatsby-theme-search`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/plasma`,
        path: `${__dirname}/src/content/recherche/plasma`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/neutrino`,
        path: `${__dirname}/src/content/recherche/neutrino`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/prisma`,
        path: `${__dirname}/src/content/recherche/prisma`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/radiochimie`,
        path: `${__dirname}/src/content/recherche/radiochimie`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/sen`,
        path: `${__dirname}/src/content/recherche/sen`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/theorie`,
        path: `${__dirname}/src/content/recherche/theorie`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `recherche/xenon`,
        path: `${__dirname}/src/content/recherche/xenon`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "services-techniques-et-administration",
        path: `${__dirname}/src/content/services-techniques-et-administration`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "general",
        path: `${__dirname}/src/content/general`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "smart",
        path: `${__dirname}/src/content/smart`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "axes-de-recherche",
        path: `${__dirname}/src/content/axes-de-recherche`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "seminars",
        path: `${__dirname}/src/seminars/2020`,
      },
    },
    {
      resolve: "gatsby-theme-ldap",
      options: {
        disabled: !(process.env.WITHLDAP === "yes"),
      },
    },
  ],
}
