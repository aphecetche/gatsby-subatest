import React from "react"
import NavLink from "./nav-link"
import { makeStyles } from "@material-ui/core/styles"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    "& ul": {
      //letterSpacing: theme.spacing(0.25),
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: theme.spacing(0, 0, 0, 2),
      padding: 0,
      "& li": {
        fontSize: "1.2rem",
        fontWeight: "100",
        margin: theme.spacing(0, 2, 0, 0),
        padding: 0,
      },
    },
  },
}))

const PrimaryNavigation = (props) => {
  const { links, active, setActive } = props
  const css = useStyles()
  return (
    <nav className={css.root}>
      <ul>
        {links.map((x) => {
          return (
            <li key={x.label}>
              <NavLink
                active={x.label === active}
                to={x.to}
                onClick={
                  x.hasSecondary
                    ? (event) => {
                        event.preventDefault()
                        x.label === active
                          ? setActive("")
                          : setActive(event.target.textContent)
                      }
                    : null
                }
              >
                {x.label}
              </NavLink>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

PrimaryNavigation.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      to: PropTypes.string,
    })
  ).isRequired,
  active: PropTypes.string.isRequired,
  setActive: PropTypes.func.isRequired,
}
export default PrimaryNavigation
