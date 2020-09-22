import React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { Button } from "@material-ui/core";
import clsx from "clsx";
import PropTypes from "prop-types";
import withStyles from "@material-ui/styles/withStyles";
import { localizeUrl } from "gatsby-theme-intl";
import ErrorIcon from "@material-ui/icons/Error";
import Tooltip from "@material-ui/core/Tooltip";
import Typography from "@material-ui/core/Typography";

const MissingLink = ({ value, children }) => (
  <Tooltip color="error" title={`Missing link ${value}`}>
    <Typography color="error">
      <ErrorIcon color="error" />
      {children}
    </Typography>
  </Tooltip>
);

export const styles = (theme) => ({
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
  button: {},
});

const stripTrailingPath = (p) => {
  if (p.endsWith("/") && p !== "/") {
    return p.slice(0, -1);
  }
  return p;
};

export const isSamePath = (p1, p2) => {
  return stripTrailingPath(p1) === stripTrailingPath(p2);
};

const NavLink = (props) => {
  const {
    to,
    classes,
    className,
    children,
    condensed,
    onClick,
    active,
  } = props;

  const data = useStaticQuery(graphql`
    {
      allSitePage {
        totalCount
        nodes {
          path
        }
      }
    }
  `);

  // if we provide an onClick function, then
  // it's not a "regular" link, i.e. we
  // disable the href
  const cn = clsx(className, classes.root, {
    [active]: classes.active,
    [condensed]: classes.condensed,
  });

  if (onClick) {
    return (
      <Button className={clsx(cn, classes.button)} onClick={onClick}>
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
  const lto = localizeUrl(to);
  console.log("NavLink render");
  const ok =
    data.allSitePage.nodes.filter((n) => {
      return isSamePath(n.path, `${lto}`);
    }).length > 0;

  return (
    <Link className={cn} to={lto}>
      {ok ? children : <MissingLink value={lto}>{children}</MissingLink>}
    </Link>
  );
};

NavLink.propTypes = {
  to: PropTypes.string,
  classes: PropTypes.object,
  className: PropTypes.string,
  children: PropTypes.any,
  condensed: PropTypes.bool,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

NavLink.defaultProps = {
  condensed: false,
};
export default withStyles(styles)(NavLink);
