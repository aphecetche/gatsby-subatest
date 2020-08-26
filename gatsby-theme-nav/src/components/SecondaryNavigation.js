import React from "react";
import BigMenu from "./BigMenu";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  secondary: {
    "& h6": {
      color: theme.palette.primary.light,
    },
  },
}));

const SecondaryNavigation = ({ data, active, setActive }) => {
  const css = useStyles();
  const onClose = (event) => {
    event.preventDefault();
    setActive("");
  };
  const menu = data.filter((x) => x.title === active);
  return (
    <nav aria-label="Secondary" className={css.secondary}>
      {menu.map((x) => (
        <BigMenu title={x.title} groups={x.groups} onClose={onClose} />
      ))}
    </nav>
  );
};

export default SecondaryNavigation;
