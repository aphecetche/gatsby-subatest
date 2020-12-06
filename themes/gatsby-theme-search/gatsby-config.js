const remark = require("remark")
const stripMarkdown = require("strip-markdown")

module.exports = {
  plugins: [
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
            title: (node) => node.frontmatter.title,
            content: (node) => node.rawBody,
            slug: (node) => node.fields.slug,
            excerpt: (node) => {
              const text = remark().use(stripMarkdown).processSync(node.rawBody)
              const excerptLength = 140 // Hard coded excerpt length
              return String(text).substring(0, excerptLength) + "..."
            },
            date: (node) => node.frontmatter.date,
          },
        },
        filename: "search_index.json",
      },
    },
  ],
}
