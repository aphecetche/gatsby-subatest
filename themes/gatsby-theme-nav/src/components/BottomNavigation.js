import React from "react";
import { makeStyles } from "@material-ui/core";
import NavLink from "./NavLink";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(0, 0, 2, 0),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& ul": {
      margin: `0 ${theme.spacing(1)}`,
      padding: 0,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      //maxWidth: "800px",
      justifyContent: "flex-start",
      listStyle: "none",
      "& li": {
        margin: theme.spacing(0, 2),
        //padding: theme.spacing(0, 2),
        fontWeight: "100",
        fontSize: "1.0rem",
      },
    },
  },
}));

const BottomNavigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul>
        <li>
          <NavLink to="/general/tutelles">Tutelles</NavLink>
        </li>
        <li>
          <NavLink to="http://intranet-subatech">Intranet</NavLink>
        </li>
        <li>
          <NavLink to="/general/annuaires">Annuaires</NavLink>
        </li>
        <li>
          <NavLink to="/general/mentions-legales">Mentions légales</NavLink>
        </li>
        <li>
          <NavLink to="/general/nous-contacter">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default BottomNavigation;
