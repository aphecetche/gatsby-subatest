import React, { useState } from "react";
import PrimaryNavigation from "./PrimaryNavigation";
import SecondaryNavigation from "./SecondaryNavigation";
import { Grid, makeStyles } from "@material-ui/core"

const useStyle = makeStyles({
    main: {
        display: "flex",
        flexDirection: "column"
    }
})

const Navigation = ({ data, initialActive = "Recherche" }) => {
  const [active, setActive] = useState(initialActive);
  let primary = data.map((x) => {
    return { label: x.title, to: x.to };
  });

  return (
      <Grid container xs={12}>
          <Grid item>
      <PrimaryNavigation
        links={primary}
        active={active}
        setActive={setActive}
      />
              </Grid>
                  <Grid item>
              </Grid>
                  </Grid>
  );
};
export default Navigation;
