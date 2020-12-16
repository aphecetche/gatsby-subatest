const yaml = require("js-yaml")
const fs = require("fs")
const intl = require("gatsby-theme-intl/src/helpers/slug")

module.exports = ({
  node,
  createNodeId,
  createContentDigest,
  actions,
  reporter,
}) => {
  if (node.internal.type === "File" && node.extension === "yaml") {
    console.log("yaml reading file", node.absolutePath)
    const doc = yaml.safeLoad(fs.readFileSync(node.absolutePath, "utf-8"))
    const items = doc.items
      ? Object.entries(doc.items).map((m) => {
          const [k, v] = m
          return { name: k, to: v }
        })
      : null

    const filepath = node.name + "/"
    reporter.info(
      `gatsby-theme-menu: absolutepath=${node.absolutePath} filepath=${filepath}.`
    )
    if (!intl.validFilePath(filepath)) {
      reporter.panic(
        filepath +
          " is not a valid filename : missing the .fr | .en | .xx extension"
      )
    }
    const { language } = intl.extractLanguage(filepath)

    const fieldData = {
      title: doc.title,
      links: items,
      rank: doc.rank,
      language: language,
      fileDir: node.dir,
    }

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
