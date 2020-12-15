const yaml = require("js-yaml")
const fs = require("fs")
const path = require("path")

module.exports = ({
  node,
  createNodeId,
  createContentDigest,
  actions,
  reporter,
}) => {
  if (node.internal.type === "File" && node.extension === "yaml") {
    const doc = yaml.safeLoad(fs.readFileSync(node.absolutePath, "utf-8"))
    const items = doc.items
      ? Object.entries(doc.items).map((m) => {
          const [k, v] = m
          return { name: k, to: v }
        })
      : null
    const fieldData = {
      title: doc.title,
      links: items,
      rank: doc.rank,
      language: doc.language,
      path: path.dirname(node.absolutePath),
    }
    reporter.info("Dealing with " + node.absolutePath)
    const { createNode, createParentChildLink } = actions
    const menuNode = {
      ...fieldData,
      id: createNodeId(`${node.id} >>> Menu`),
      parent: node.id,
      children: [],
      internal: {
        type: "Menu",
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Menu`,
      },
    }

    createParentChildLink({
      parent: node,
      child: menuNode,
    })
    createNode(menuNode)
  }
}
