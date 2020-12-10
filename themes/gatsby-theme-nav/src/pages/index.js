import React, { useState } from "react"
import PrimaryNavigation from "../components/PrimaryNavigation"
import SecondaryNavigation from "../components/SecondaryNavigation"
import { Grid, makeStyles } from "@material-ui/core"

const useStyles = makeStyles({
  main: {
    display: "flex",
    flexDirection: "column",
  },
})

const data = [
  {
    title: "page1",
    to: "page1/titi",
    groups: [
      {
        title: "page1/group1",
        links: [
          {
            to: "/page1/group1/article1",
            label: "Article1",
          },
          {
            to: "/page1/group1/article2",
            label: "Article2",
          },
        ],
      },
    ],
  },
  {
    title: "page2",
    to: "page2/toto",
  },
]

const Demo = ({ initialActive = "" }) => {
  const classes = useStyles()
  const [active, setActive] = useState(initialActive)
  let primary = data.map((x) => {
    return { label: x.title, to: x.to }
  })
  return (
    <Grid container xs={12} className={classes.main}>
      <Grid item>
        <PrimaryNavigation
          links={primary}
          active={active}
          setActive={setActive}
        />
      </Grid>
      <Grid item></Grid>
      <SecondaryNavigation data={data} active={active} setActive={setActive} />
    </Grid>
  )
}

export default Demo
