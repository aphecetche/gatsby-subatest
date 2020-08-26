import React from "react";
import Superlink from "./Superlink";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  main: {
    background: theme.palette.background.paper,
    color: theme.palette.primary.main,
    "& ul": {
      listStyle: "none",
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      margin: 0,
      padding: "3px 0px 0px 0.25rem",
      "& li": {
        margin: 0,
        padding: 0,
        "& a": {
          fontFamily: "Open Sans Condensed",
          fontSize: "1.125rem",
          letterSpacing: "0.15em",
          fontWeight: "300",
          userSelect: "none",
          display: "block",
          color: "currentColor",
          textDecoration: "none",
          padding: "0.25rem 0.5rem",
          borderBottom: "2px solid transparent",
          "&:not([href])": {
            cursor: "pointer",
          },
          "&:hover": {
            borderBottom: "2px solid currentColor",
          },
        },
      },
    },
  },
  active: { color: theme.palette.secondary.main },
}));

const PrimaryNavigation = ({ links, active, setActive }) => {
  const css = useStyles();
  return (
    <nav className={css.main}>
      <ul>
        {links.map((x) => (
          <Typography
            key={x.label}
            className={x.label === active ? css.active : ""}
            component="li"
          >
            <Superlink
              to={x.to}
              onClick={(event) => {
                event.preventDefault();
                x.label === active
                  ? setActive("")
                  : setActive(event.target.innerHTML);
              }}
            >
              {x.label}
            </Superlink>
          </Typography>
        ))}
      </ul>
    </nav>
  );
};

export default PrimaryNavigation;
