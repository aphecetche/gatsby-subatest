import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Obfuscate from "react-obfuscate"
import PropTypes from "prop-types"

const capitalize = (s) => {
  const n = s.toLowerCase()
  return n.charAt(0).toUpperCase() + n.slice(1)
}

const Member = ({ member }) => {
  const { name, roomNumber, telephoneNumber, title, mail } = member
  const normalizedName = name
    .split(" ")
    .map((n) => capitalize(n))
    .join(" ")
  const s =
    normalizedName +
    " - " +
    title +
    " - " +
    roomNumber +
    " - " +
    telephoneNumber +
    " - "
  return (
    <React.Fragment>
      {s}
      <span>
        <Obfuscate email={mail} />
      </span>
    </React.Fragment>
  )
}

Member.propTypes = {
  member: PropTypes.shape({
    name: PropTypes.string,
    roomNumber: PropTypes.string,
    telephoneNumber: PropTypes.string,
    title: PropTypes.string,
    mail: PropTypes.string,
  }),
}
const Members = ({ group }) => {
  const data = useStaticQuery(
    graphql`
      query GetMembers {
        allMember(sort: { fields: name, order: ASC }) {
          totalCount
          edges {
            node {
              name
              mail
              telephoneNumber
              roomNumber
              group
              title
            }
          }
        }
      }
    `
  )

  if (data.allMember.edges.length < 2) {
    return (
      <p>
        The build of this site was made on a machine with no access the CCIN2P3
        LDAP
      </p>
    )
  }

  const reGroup = new RegExp(group, "i")
  const reLeader = new RegExp("chef", "i")
  const teamMembers = data.allMember.edges.filter((n) =>
    reGroup.test(n.node.group)
  )
  const teamLeader = teamMembers.find((n) => reLeader.test(n.node.group))
  const c = teamMembers.map((n) => (
    <li key={n.node.name}>
      <Member member={n.node} />
    </li>
  ))
  return (
    <React.Fragment>
      {teamLeader ? (
        <p>
          Chef d&apos;équipe / Team leader :&nbsp;
          <Member member={teamLeader.node} />
        </p>
      ) : null}
      <ul>{c}</ul>
    </React.Fragment>
  )
}

Members.propTypes = {
  group: PropTypes.string,
}

export default Members
