import React from "react";
import { makeStyles } from "@material-ui/core";
import NavLink from "./NavLink";
import Language from "./Language";
import { useTranslation } from "gatsby-theme-intl";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(0, 0, 2, 0),
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    "& ul": {
      margin: `0 ${theme.spacing(1)}`,
      padding: 0,
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "flex-start",
      listStyle: "none",
      alignItems: "center",
      "& li": {
        margin: theme.spacing(0, 2),
        //padding: theme.spacing(0, 2),
        fontWeight: "100",
        fontSize: "1.0rem",
      },
    },
  },
}));

const WrapLink = ({ to, label }) => {
  const { t, i18n } = useTranslation();
  if (!i18n.exists(label)) {
    return null;
  }
  const lab = t(label);
  return (
    <li>
      <NavLink to={to}>{lab}</NavLink>
    </li>
  );
};

WrapLink.propTypes = {
  to: PropTypes.string,
  label: PropTypes.string,
};

const BottomNavigation = () => {
  const classes = useStyles();
  return (
    <nav className={classes.root}>
      <ul>
        <WrapLink to="/general/tutelles2" label="Tutelles" />
        <WrapLink to="http://intranet-subatech" label="Intranet" />
        <WrapLink to="/general/annuaires" label="Annuaires" />
        <WrapLink to="/general/mentions-legales" label="Mentions légales" />
        <WrapLink to="/general/nous-contacter" label="Contact" />
      </ul>
      <Language />
    </nav>
  );
};

export default BottomNavigation;
