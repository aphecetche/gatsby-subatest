const { createFilePath } = require("gatsby-source-filesystem")
const crypto = require("crypto")

const validFilePath = (path) => {
  const re = /(\.en\/$)|(\.fr\/$)|(\.xx\/$)/
  return path.search(re) >= 0
}
const extractLanguage = (slug) => {
  const s = slug.replace(/\/$/, "").split(".")
  return s[s.length - 1]
}

const shouldBeConsidered = (file, dirs) => {
  const matches = dirs.filter((d) => file.search(d.path) >= 0)
  return matches.length > 0
}

module.exports = (
  { node, getNode, createNodeId, actions, reporter },
  options
) => {
  if (node.internal.type === "Mdx") {
    const parent = getNode(node.parent)
    if (parent.internal.type === "File") {
      const ok = shouldBeConsidered(node.fileAbsolutePath, options.sources)
      if (ok === true) {
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
        if (!validFilePath(localizedSlug)) {
          reporter.panic(
            localizedSlug +
              " is not a valid slug : missing the .fr | .en | .xx extension"
          )
        }
        const language = extractLanguage(localizedSlug)
        const { frontmatter } = node
        const fieldData = {
          title: frontmatter.title,
          slug: localizedSlug.replace("." + language, ""),
          language: language,
          category: frontmatter.category,
          images: frontmatter.images,
          component: frontmatter.component,
          aside: frontmatter.aside,
          asides: frontmatter.asides,
          layout: frontmatter.layout,
          rank: frontmatter.rank,
          fragment: frontmatter.fragment,
          rawBody: node.rawBody,
          fileAbsolutePath: node.fileAbsolutePath,
        }
        const { createNode, createParentChildLink } = actions
        createNode({
          ...fieldData,
          id: createNodeId(`${node.id} >>> Article`),
          parent: node.id,
          children: [],
          internal: {
            type: "MdxArticle",
            contentDigest: crypto
              .createHash(`md5`)
              .update(JSON.stringify(fieldData))
              .digest(`hex`),
            content: JSON.stringify(fieldData),
            description: `Mdx implementation of the Article interface`,
          },
        })

        createParentChildLink({
          parent: parent,
          child: node,
        })
      }
    }
  }
}
