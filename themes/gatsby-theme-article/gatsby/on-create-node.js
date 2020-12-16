const { createFilePath } = require("gatsby-source-filesystem")
const intl = require("gatsby-theme-intl/src/helpers/slug")

module.exports = ({
  node,
  getNode,
  createNodeId,
  createContentDigest,
  actions,
  reporter,
}) => {
  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent)
    if (parent.internal.type === "File") {
      const base =
        parent.sourceInstanceName !== "__PROGRAMMATIC__"
          ? "/" + parent.sourceInstanceName
          : ""
      const localizedSlug =
        base +
        createFilePath({
          node,
          getNode,
        })
      if (!intl.validFilePath(localizedSlug)) {
        reporter.panic(
          localizedSlug +
            " is not a valid slug : missing the .fr | .en | .xx extension"
        )
      }
      const { language, unlocalized } = intl.extractLanguage(localizedSlug)
      const { frontmatter } = node
      const fieldData = {
        title: frontmatter.title,
        slug: unlocalized,
        language: language,
        category: frontmatter.category,
        images: frontmatter.images,
        component: frontmatter.component,
        layout: frontmatter.layout,
        rank: frontmatter.rank,
        fragment: frontmatter.fragment,
        rawBody: node.rawBody,
        fileAbsolutePath: node.fileAbsolutePath,
      }
      const { createNode, createParentChildLink } = actions
      const newArticle = {
        ...fieldData,
        id: createNodeId(`${node.id} >>> Article`),
        parent: node.id,
        children: [],
        internal: {
          type: "MdxArticle",
          contentDigest: createContentDigest(fieldData),
          content: JSON.stringify(fieldData),
          description: `Mdx implementation of the Article interface`,
        },
      }
      createNode(newArticle)

      createParentChildLink({
        parent: node,
        child: newArticle,
      })
    }
  }
}
