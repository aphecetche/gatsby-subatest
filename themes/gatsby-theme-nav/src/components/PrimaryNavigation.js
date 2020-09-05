import React from "react";
import NavLink from "./NavLink";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& ul": {
      //letterSpacing: theme.spacing(0.25),
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: theme.spacing(0, 0, 0, 2),
      padding: 0,
      "& li": {
        fontSize: "1.2rem",
        fontWeight: "100",
        margin: theme.spacing(0, 2, 0, 0),
        padding: 0,
      },
    },
  },
}));

const PrimaryNavigation = ({ links, active, setActive }) => {
  const css = useStyles();
  return (
    <nav className={css.root}>
      <ul>
        {links.map((x) => (
          <li key={x.label}>
            <NavLink
              active={x.label === active}
              to={x.to}
              onClick={(event) => {
                event.preventDefault();
                x.label === active
                  ? setActive("")
                  : setActive(event.target.innerHTML);
              }}
            >
              {x.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
