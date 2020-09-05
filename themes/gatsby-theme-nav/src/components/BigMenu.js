import React from "react";
import NavGroup from "./NavGroup";
import CloseButton from "./CloseButton";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  bigmenu: {
    padding: theme.spacing(2),
    "& ul": {
      listStyle: "none",
    },
  },
  header: {
    margin: theme.spacing(1, 0, 1, 0),
    padding: theme.spacing(0, 0, 1, 0),
    color: theme.palette.primary.main,
    justifyContent: "space-between",
    alignItems: "center",
    borderBottom: `2px solid ${theme.palette.primary.light}`,
  },
  title: {
    "& h6": {
      ...theme.typography.h6,
      background: "transparent",
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
      <Grid item container className={css.header}>
        <Grid item>
          <Typography variant="h6" component="h1" className={css.title}>
            {title}
          </Typography>
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
