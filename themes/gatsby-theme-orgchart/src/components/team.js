import React from "react"
import OrgItem from "./org-item"
import PropTypes from "prop-types"

const Team = ({ name, leader, link }) => (
  <OrgItem headline={name} subheadline={leader} link={link} />
)

Team.propTypes = {
  name: PropTypes.string.isRequired,
  leader: PropTypes.string.isRequired,
  link: PropTypes.string,
}
export default Team
