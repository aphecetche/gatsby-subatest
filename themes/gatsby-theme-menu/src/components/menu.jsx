import React from "react"
import PropTypes from "prop-types"
import NavLink from "gatsby-theme-nav/src/components/nav-link"

const Menu = ({ title, links }) => {
  return (
    <>
      <h2>{title}</h2>
      <ul>
        {links &&
          links.map((m, i) => (
            <li key={i}>
              <NavLink to={m.to}>{m.name}</NavLink>
            </li>
          ))}
      </ul>
    </>
  )
}

Menu.propTypes = {
  title: PropTypes.string,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      to: PropTypes.string,
    })
  ),
}

export default Menu
