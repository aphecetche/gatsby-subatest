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
    padding: "1rem",
  },
  title: {
    margin: "0.5rem 0",
    padding: "0",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
    "& h4, & h5": {
      color: "white",
      padding: "0",
      margin: "0",
    },
  },
  navgrouplist: {
    margin: "0",
    display: "flex",
    flexWrap: "wrap",
    "& li": {
      display: "block",
    },
    "& > li": {
      minWidth: "23%",
      marginRight: "1em",
    },
  },
}));

const BigMenu = ({ title, groups, onClose }) => {
  const css = useStyles();
  return (
    <Grid container className={css.bigmenu}>
      <Grid item container className={css.title}>
        <Grid item>
          <Typography variant="h5">{title}</Typography>
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
