import React from "react"
import BigMenu from "./big-menu"
import { makeStyles } from "@material-ui/core/styles"
import Paper from "@material-ui/core/Paper"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  secondary: {
    margin: theme.spacing(1, 0, 0, 0),
  },
}))

const SecondaryNavigation = ({ data, active, setActive }) => {
  const css = useStyles()
  const onClose = (event) => {
    event.preventDefault()
    setActive("")
  }
  const menu = data.filter((x) => {
    if (!x.groups) {
      return false
    }
    return x.title === active
  })
  if (!menu) {
    return null
  }
  return (
    <Paper elevation={2} className={css.secondary}>
      <nav aria-label="Secondary">
        {menu.map((x) => (
          <BigMenu
            key={x.title}
            title={x.title}
            groups={x.groups}
            onClose={onClose}
          />
        ))}
      </nav>
    </Paper>
  )
}

SecondaryNavigation.propTypes = {
  data: PropTypes.array.isRequired,
  setActive: PropTypes.func.isRequired,
  active: PropTypes.string.isRequired,
}
export default SecondaryNavigation
