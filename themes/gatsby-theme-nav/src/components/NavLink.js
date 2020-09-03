import React from "react";
import { Link } from "gatsby";
import { Button, makeStyles } from "@material-ui/core";
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
  root: {
    letterSpacing: "inherit",
    userSelect: "none",
    display: "block",
    color: theme.palette.primary.main,
    fontSize: "inherit",
    fontWeight: "inherit",
    textDecoration: "none",
    textTransform: "none",
    borderRadius: 0,
    padding: 0,
    margin: 0,
    "&:not([href])": {
      cursor: "pointer",
    },
    "&:hover": {
      color: theme.palette.secondary.main,
      background: "inherit",
    },
  },
  active: {
    color: theme.palette.secondary.main,
  },
  condensed: {
    fontFamily: "Open Sans Condensed",
  },
}));

const NavLink = ({ to, children, condensed = false, onClick, active }) => {
  const classes = useStyles();
  // if we provide an onClick function, then
  // it's not a "regular" link, i.e. we
  // disable the href
  const cn = clsx(
    classes.root,
    active && classes.active,
    condensed && classes.condensed
  );

  if (onClick) {
    return (
      <Button className={cn} onClick={onClick}>
        {children}
      </Button>
    );
  }
  // if it's an external link
  // use a regular <a href="">
  const re = /^http/;
  if (re.test(to)) {
    return (
      <a className={cn} href={to}>
        {children}
      </a>
    );
  }
  // internal link : use Gatsby own Link component
  return (
    <Link className={cn} to={to}>
      {children}
    </Link>
  );
};

export default NavLink;
