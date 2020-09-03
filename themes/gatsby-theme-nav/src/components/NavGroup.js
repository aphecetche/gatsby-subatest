import React from "react";
import NavLink from "./NavLink";
import { makeStyles, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  navgroup: {
    padding: "0",
    margin: "0",
    marginBottom: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  title: {
    margin: "0",
    color: theme.palette.primary.main,
    fontSize: "1.0rem",
    padding: theme.spacing(0, 0, 1, 0),
  },
  linklist: {
    listStyle: "none",
    margin: "0",
    padding: "0",

    "& li": {
      margin: "0",
      padding: "0",

      "& a": {
        fontSize: "1.0rem",
        display: "block",
        //fontWeight: "100",
        textDecoration: "none",
        color: theme.palette.text.primary,
        "&:hover": {
          color: theme.palette.primary.main,
        },
        width: "max-content",
      },
    },
  },
}));

const NavGroup = ({ title, links }) => {
  const css = useStyles();
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
              <NavLink condensed={false} to={l.to}>
                {l.label}
              </NavLink>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default NavGroup;
