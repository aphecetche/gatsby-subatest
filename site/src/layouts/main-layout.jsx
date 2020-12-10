import React from "react"
import Layout from "components/layout"
import { makeStyles, Grid } from "@material-ui/core"
import MdxContentProvider from "gatsby-theme-article/src/components/mdx-content-provider"
import PropTypes from "prop-types"

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    ...theme.typography.body1,
  },
}))

const MainLayout = ({ main, aside }) => {
  const classes = useStyles()

  const mainWidth = aside ? 6 : 10
  const asideWidth = 12 - mainWidth

  return (
    <MdxContentProvider>
      <Layout>
        <Grid container className={classes.root}>
          <Grid item xs={false} sm={1} />
          <Grid item xs={12} sm={mainWidth} className={classes.main}>
            {main}
          </Grid>
          <Grid item xs={false} sm={1} />
          {asideWidth > 0 && (
            <Grid item xs={12} sm={3}>
              {aside}
            </Grid>
          )}
        </Grid>
      </Layout>
    </MdxContentProvider>
  )
}
MainLayout.propTypes = {
  aside: PropTypes.node,
  main: PropTypes.node,
}
export default MainLayout
