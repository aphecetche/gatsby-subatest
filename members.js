var ldap = require("ldapjs")
var client = ldap.createClient({
  url: "ldaps://ccdirectory.in2p3.fr",
})

const category = "plasma"

const opts = {
  /*filter: `(&(businessCategory=${category})(ou=UMR6457))`*/

  filter: `(ou=UMR6457)`,
  scope: "sub",
  //attributes: ["sn", "ou"],
  limit: 2,
}

client.bind("", "", function(err) {
  if (err) {
    console.log("Error in connection", err)
  } else {
    console.log("connection ok")
    client.search("ou=people,dc=in2p3,dc=fr", opts, function(err, res) {
      res.on("searchEntry", function(entry) {
        console.log(
          "entry: " +
            entry.attributes.find(a => a.type === "givenName") +
            entry.attributes.find(a => a.type === "telephoneNumber")
        )
      })
      res.on("searchReference", function(referral) {
        console.log("referral: " + referral.uris.join())
      })
      res.on("error", function(err) {
        console.error("error: " + err.message)
      })
      res.on("end", function(result) {
        console.log("status: " + result.status)
        client.unbind(res.end)
      })
    })
  }
})
