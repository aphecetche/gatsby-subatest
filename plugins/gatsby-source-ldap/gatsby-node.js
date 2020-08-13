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

exports.onPreInit = () => console.log("Loaded gatsby-starter-plugin")

const getMembers = new Promise((resolve, reject) => {
  const client = ldap.createClient({ url: "ldaps://ccdirectory.in2p3.fr" })

  const opts = {
    /*filter: `(&(businessCategory=${category})(ou=UMR6457))`*/

    filter: `(ou=UMR6457)`,
    scope: "sub",
    //attributes: ["sn", "ou"]
  }

  var members = []

  client.bind("", "", function(err) {
    if (err) {
      reject("could not reach ldap server")
    } else {
      console.log("Performing ldap search")
      client.search("ou=people,dc=in2p3,dc=fr", opts, function(err, res) {
        res.on("searchEntry", function(entry) {
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
              .filter(w => /\d+/.test(w) === false)
              .join(" "),
            mail,
            telephoneNumber: String(telephoneNumber || ""),
            roomNumber: String(roomNumber || ""),
            group: String(businessCategory),
            title: String(title),
          })
        })
        res.on("end", function(result) {
          console.log(
            "status: " + result.status + " found " + members.length + " members"
          )
          client.unbind(res.end)
          resolve(members)
        })
      })
    }
  })
})

exports.sourceNodes = async ({
  actions,
  createContentDigest,
  createNodeId,
}) => {
  const { createNode } = actions

  getMembers.then(members => {
    //console.log(JSON.stringify(members))
    members.forEach(m => {
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
