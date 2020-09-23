import React from "react"
import Service from "./Service"
import List from "@material-ui/core/List"
import OrgItem from "./OrgItem"

import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: theme.spacing(4),
  },
}))

const useStylesOrg = makeStyles((theme) => ({
  root: {
    padding: 0,
  },
  text: {
    "& span": {
      fontSize: "0.875rem",
    },
  },
}))

const Administration = () => {
  const classes = useStyles()
  const clorg = useStylesOrg()
  return (
    <Service name="Administration" leader="I. Ollitrault" link="">
      <List className={classes.root}>
        <OrgItem
          classes={clorg}
          headline="Enseignement"
          link="/fr/enseignement"
        />
        <OrgItem classes={clorg} headline="Finances" />
        <OrgItem classes={clorg} headline="Missions" />
        <OrgItem classes={clorg} headline="Ressources humaines" />
        <OrgItem
          classes={clorg}
          headline="Communication interne et événementiel"
        />
      </List>
    </Service>
  )
}

export default Administration
