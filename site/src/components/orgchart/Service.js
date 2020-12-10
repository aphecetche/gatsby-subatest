import React from "react"
import OrgItem from "./org-item"
import PropTypes from "prop-types"

const Service = ({ children, name, leader, link }) => (
  <OrgItem headline={name} subheadline={leader} link={link}>
    {children}
  </OrgItem>
)

Service.propTypes = {
  children: PropTypes.node,
  leader: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string,
}

export default Service
