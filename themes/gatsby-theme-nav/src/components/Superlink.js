import React from "react";
import { Link } from "gatsby";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    fontFamily: "Open Sans Condensed",
    fontSize: "1.125rem",
    letterSpacing: "0.15em",
    fontWeight: "300",
    userSelect: "none",
    display: "block",
    color: "currentColor",
    textDecoration: "none",
    textTransform: "none",
    borderRadius: 0,
    padding: "0.25rem 0.5rem",
    borderBottom: "2px solid transparent",
    "&:not([href])": {
      cursor: "pointer",
    },
    "&:hover": {
      borderBottom: "2px solid currentColor",
      background: "transparent",
    },
  },
});

const Superlink = ({ to, children, onClick, className }) => {
  const classes = useStyles();
  // if we provide an onClick function, then
  // it's not a "regular" link, i.e. we
  // disable the href
  if (onClick) {
    return (
      <Button className={classes.root} onClick={onClick}>
        {children}
      </Button>
    );
  }
  // if it's an external link
  // use a regular <a href="">
  const re = /^http/;
  if (re.test(to)) {
    return (
      <a className={className} href={to}>
        {children}
      </a>
    );
  }
  // internal link : use Gatsby own Link component
  return (
    <Link className={className} to={to}>
      {children}
    </Link>
  );
};

export default Superlink;
