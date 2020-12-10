/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

/**
 * You can uncomment the following line to verify that
 * your plugin is being loaded in your site.
 *
 * See: https://www.gatsbyjs.org/docs/creating-a-local-plugin/#developing-a-local-plugin-that-is-outside-your-project
 */
const ldap = require("ldapjs")

exports.onPreInit = ({ reporter }, pluginOptions) => {
  reporter.info(`gatsby-theme-ldap options: ${JSON.stringify(pluginOptions)}`)
}

// note that the getMembers should never fails : if we cannot get the LDAP data
// we simply return a fake members array with only one element which is constructed
// in a way that the Members component won't fail trying to render it
const getMembers = (disabled, reporter) =>
  new Promise((resolve) => {
    const noMembers = [
      {
        name: "",
        mail: "",
        telephoneNumber: "",
        roomNumber: "",
        group: "",
        title: "",
      },
    ]

    if (disabled) {
      reporter.warn(
        "gatsby-theme-ldap is disabled (from options) : just returning no members"
      )
      resolve(noMembers)
      return
    }

    const client = ldap.createClient({ url: "ldaps://ccdirectory.in2p3.fr" })
    const opts = {
      filter: `(ou=UMR6457)`,
      scope: "sub",
      timeLimit: 60,
      attributes: [
        "cn",
        "mail",
        "telephoneNumber",
        "roomNumber",
        "businessCategory",
        "title",
      ],
    }

    var members = []

    reporter.info("gatsby-theme-ldap: createClient done")

    client.bind("", "", function (err) {
      if (err) {
        reporter.error("gatsby-theme-ldap: bind to ldap server failed")
        resolve(noMembers)
        return
      } else {
        reporter.info("gatsby-theme-ldap: performing ldap search")
        client.search("ou=people,dc=in2p3,dc=fr", opts, function (err, res) {
          res.on("searchEntry", function (entry) {
            const {
              cn,
              mail,
              telephoneNumber,
              roomNumber,
              businessCategory,
              title,
            } = entry.object
            members.push({
              name: cn
                .split(" ")
                .filter((w) => /\d+/.test(w) === false)
                .join(" "),
              mail,
              telephoneNumber: String(telephoneNumber || ""),
              roomNumber: String(roomNumber || ""),
              group: String(businessCategory),
              title: String(title),
            })
          })
          res.on("end", function (result) {
            if (result.status === 0) {
              client.unbind(res.end)
            }
            reporter.info(`gatsby-theme-ldap: got ${members.length} members`)
            resolve(members)
          })
        })
      }
    })
  })

exports.sourceNodes = async (
  { actions, reporter, createContentDigest, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions

  return getMembers(pluginOptions.disabled, reporter).then((members) => {
    members.forEach((m) => {
      createNode({
        ...m,
        id: createNodeId(`member-${m.name}`),
        parent: null,
        children: [],
        internal: {
          type: "Member",
          contentDigest: createContentDigest(m),
        },
      })
    })
  })
}
