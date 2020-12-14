import React from "react"
import OrgItem from "./org-item"
import PropTypes from "prop-types"

const Role = ({ title, name, link }) => (
  <OrgItem headline={title} subheadline={name} link={link} />
)

Role.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Role
