import React from "react";
import Superlink from "./Superlink";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navgroup: {
    padding: "0",
    margin: "0",
    display: "flex",
    width: "max-content",
    flexDirection: "column",
  },
  title: {
    margin: "0",
    color: theme.palette.primary.main,
    padding: "0 0 1rem 0",
  },
  linklist: {
    listStyle: "none",
    margin: "0",
    padding: "0",

    "& li": {
      margin: "0",
      padding: "0",

      "& a": {
        display: "block",
        textDecoration: "none",
        fontWeight: "100",
        color: theme.palette.background.paper,
        "&:hover": {
          background: theme.palette.primary.main,
          text: theme.palette.background.paper,
        },
        width: "max-content",
      },
    },
  },
}));

const NavGroup = ({ title, links }) => {
  const css = useStyles();
  console.log("NavGroup title=", title, "links=", links);
  return (
    <div className={css.navgroup}>
      {!!title && (
        <Typography variant="h6" className={css.title}>
          {title}
        </Typography>
      )}
      <ul className={css.linklist}>
        {!!links &&
          links.map((l) => (
            <li key={l.label}>
              <Superlink to={l.to}>{l.label}</Superlink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavGroup;
