import React from "react"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText"
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction"
import IconButton from "@material-ui/core/IconButton"
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import clsx from "clsx"
import withStyles from "@material-ui/styles/withStyles"

export const styles = (theme) => ({
  root: {},
  text: { marginRight: theme.spacing(2) },
  more: {},
})

const OrgItem = ({ classes, children, headline, subheadline, link }) => {
  return (
    <>
      <ListItem className={clsx(classes.root)}>
        <ListItemText
          className={clsx(classes.text)}
          secondary={subheadline ? subheadline : null}
          primary={headline}
        />
        <ListItemSecondaryAction className={clsx(classes.more)}>
          {link ? (
            <IconButton to={link} component={Link}>
              <OpenInBrowserIcon />
            </IconButton>
          ) : null}
        </ListItemSecondaryAction>
      </ListItem>
      {children}
    </>
  )
}

OrgItem.propTypes = {
  children: PropTypes.node,
  headline: PropTypes.string.isRequired,
  subheadline: PropTypes.string,
  link: PropTypes.string,
}

export default withStyles(styles)(OrgItem)
