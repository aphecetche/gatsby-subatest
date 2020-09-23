import React from "react"
import Grid from "@material-ui/core/Grid"
import Card from "@material-ui/core/Card"
import CardActions from "@material-ui/core/CardActions"
import CardContent from "@material-ui/core/CardContent"
import List from "@material-ui/core/List"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
  root: {},
  card: {},
  title: {},
  list: {},
}))

const Division = ({ title, children }) => {
  const classes = useStyles()
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} xl={2} className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography
            variant="h6"
            className={classes.title}
            color="textSecondary"
          >
            {title}
          </Typography>
          <List className={classes.list}>{children}</List>
        </CardContent>
        <CardActions></CardActions>
      </Card>
    </Grid>
  )
}

export default Division
