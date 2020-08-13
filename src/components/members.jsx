import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Obfuscate from "react-obfuscate"

const capitalize = s => {
  const n = s.toLowerCase()
  return n.charAt(0).toUpperCase() + n.slice(1)
}

const Member = ({ member }) => {
  const { name, roomNumber, telephoneNumber, title, mail } = member
  console.log(name, roomNumber, telephoneNumber, mail)
  const normalizedName = name
    .split(" ")
    .map(n => capitalize(n))
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
  const reGroup = new RegExp(group, "i")
  const reLeader = new RegExp("chef", "i")
  const teamMembers = data.allMember.edges.filter(n =>
    reGroup.test(n.node.group)
  )
  const teamLeader = teamMembers.find(n => reLeader.test(n.node.group))
  const c = teamMembers.map(n => (
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

export default Members
