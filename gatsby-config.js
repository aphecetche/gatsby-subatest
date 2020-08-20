const remark = require("remark")
const stripMarkdown = require("strip-markdown")

module.exports = {
  siteMetadata: {
    title: `Laboratoire Subatech`,
    description: `Les activités de recherche de SUBATECH gravitent autour d’un domaine, le Nucléaire, que ce soit dans ses aspects les plus fondamentaux ou très appliqués, tant expérimentaux que théoriques, avec des recherches menées à la fois dans le domaine de la Physique Nucléaire et de la Chimie Nucléaire`,
    author: `L. Aphecetche`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-relative-images`,
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 800,
            },
          },
          "gatsby-remark-static-images",
        ],
      },
    },
    `gatsby-plugin-postcss`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [{ name: "fr" }],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "content", store: true },
          { name: "slug", store: true },
          { name: "excerpt", store: true },
          { name: "date", store: true },
        ],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            content: node => node.rawBody,
            slug: node => node.fields.slug,
            excerpt: node => {
              const text = remark()
                .use(stripMarkdown)
                .processSync(node.rawBody)
              const excerptLength = 140 // Hard coded excerpt length
              return String(text).substring(0, excerptLength) + "..."
            },
            date: node => node.frontmatter.date,
          },
        },
        filename: "search_index.json",
      },
    },
    {
      resolve: "gatsby-source-ldap",
      options: {
        disabled: !process.env.WITHLDAP,
      },
    },
    {
      resolve: "gatsby-plugin-root-import",
      options: {
        components: `${__dirname}/src/components`,
      },
    },
  ],
}
