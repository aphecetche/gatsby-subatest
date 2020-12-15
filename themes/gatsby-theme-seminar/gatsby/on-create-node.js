const { createFilePath } = require("gatsby-source-filesystem")

const mdxNode2Seminar = ({ frontmatter, fileAbsolutePath }) => {
  if (frontmatter.category !== "seminar") {
    return null
  }
  return {
    author_filiation_url: frontmatter.author_filiation_url,
    author_filiation_url2: frontmatter.author_filiation_url2,
    author_filiation: frontmatter.author_filiation,
    author_filiation2: frontmatter.author_filiation2,
    author_url: frontmatter.author_url,
    author_url2: frontmatter.author_url2,
    author: frontmatter.author,
    author2: frontmatter.author2,
    date: frontmatter.date,
    fileAbsolutePath: fileAbsolutePath,
    layout: frontmatter.layout,
    location: frontmatter.location,
    slug: null,
    title: frontmatter.title,
    title2: frontmatter.title2,
    type: frontmatter.type,
  }
}

module.exports = ({
  node,
  getNode,
  createNodeId,
  actions,
  createContentDigest,
}) => {
  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent)
    if (parent.internal.type === "File") {
      const seminar = mdxNode2Seminar(node)
      if (!seminar) {
        return
      }
      seminar.slug = "/seminar" + createFilePath({ node, getNode })
      const { createNode, createParentChildLink } = actions
      createNode({
        ...seminar,
        id: createNodeId(`${node.id} >>> Seminar`),
        parent: node.id,
        children: [],
        internal: {
          type: "MdxSeminar",
          contentDigest: createContentDigest(seminar),
          content: JSON.stringify(seminar),
          description: `MdxSeminar`,
        },
      })

      createParentChildLink({
        parent: parent,
        child: node,
      })
    }
  }
}
