import React from "react"
import PropTypes from "prop-types"
import { makeStyles } from "@material-ui/core"
import { usePageContext, localizeSlug } from "gatsby-theme-intl"
import { NavLink, isSamePath } from "gatsby-theme-nav"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: 0,
    padding: 0,
    "& h2": {
      ...theme.typography.h6,
      color: theme.palette.primary.main,
      textAlign: "right",
    },
    "& ul": {
      listStyle: "none",
      margin: 0,
      padding: 0,
      "& li": {
        display: "block",
        marginBottom: theme.spacing(1),
        border: "none",
        borderBottom: `1px dotted ${theme.palette.grey["400"]}`,
        "&.active": {
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
        },
      },
      "& a": {
        color: theme.palette.primary.main,
        textDecoration: "none",
        "&:hover": {
          background: theme.palette.grey["200"],
        },
      },
    },
    "& li>ul": {
      paddingLeft: theme.spacing(2),
      "& li": {
        borderBottom: "none",
      },
    },
  },
}))

const Menu = ({ title, links }) => {
  const classes = useStyles()
  const { language, slug } = usePageContext()
  const currentPage = localizeSlug(slug, language)

  return (
    <div className={classes.root}>
      <h2>{title}</h2>
      <ul>
        {links &&
          links.map((m, i) => {
            const ln = localizeSlug(m.to, language)
            const cn = isSamePath(currentPage, ln) ? "active" : ""
            return (
              <li className={cn} key={i}>
                <NavLink to={m.to}>{m.name}</NavLink>
              </li>
            )
          })}
      </ul>
    </div>
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
