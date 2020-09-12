import React from "react"
import StarIcon from "@material-ui/icons/Star"
import StarHalfIcon from "@material-ui/icons/StarHalf"
import Grid from "@material-ui/core/Grid"

const MenuPlasma = () => {
  let stars = []
  for (let i = 0; i < 4; i++) {
    stars.push(
      <Grid item key={i}>
        <StarIcon color="primary" />
      </Grid>
    )
  }
  return (
    <Grid container>
      {stars}
      <Grid item>
        <StarHalfIcon color="secondary" />
      </Grid>
    </Grid>
  )
}

export default MenuPlasma
