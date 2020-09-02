import React from "react";
import NavGroup from "./NavGroup";
import CloseButton from "./CloseButton";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bigmenu: {
    background: "black",
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(2),
  },
  title: {
    margin: theme.spacing(1, 0, 1, 0),
    padding: theme.spacing(0, 0, 1, 0),
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    color: "white",
    "& h6": {
      padding: "0",
      margin: "0",
      fontSize: "1.1rem",
    },
  },
  navgrouplist: {
    margin: theme.spacing(2, 0, 0, 0),
    padding: "0",
    display: "flex",
    flexWrap: "wrap",
    "& > li": {
      margin: theme.spacing(0, 5, 0, 0),
    },
  },
}));

const BigMenu = ({ title, groups, onClose }) => {
  const css = useStyles();
  return (
    <Grid container className={css.bigmenu}>
      <Grid item container className={css.title}>
        <Grid item>
          <Typography variant="h6">{title}</Typography>
        </Grid>
        <Grid item>
          <CloseButton onClick={onClose}>Fermer</CloseButton>
        </Grid>
      </Grid>
      <Grid item>
        <ul className={css.navgrouplist}>
          {!!groups &&
            groups.map((x) => (
              <li key={x.links[0].label}>
                <NavGroup title={x.title} links={x.links} />
              </li>
            ))}
        </ul>
      </Grid>
    </Grid>
  );
};

export default BigMenu;
