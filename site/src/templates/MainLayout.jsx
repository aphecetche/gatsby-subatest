import React from "react"
import Layout from "components/Layout"
import { makeStyles, Grid } from "@material-ui/core"
import { MDXProvider } from "@mdx-js/react"
import DebugComponents from "components/DebugComponents"

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
    <MDXProvider components={DebugComponents}>
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
    </MDXProvider>
  )
}

export default MainLayout
