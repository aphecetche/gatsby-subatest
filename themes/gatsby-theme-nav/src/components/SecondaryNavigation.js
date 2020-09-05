import React from "react";
import BigMenu from "./BigMenu";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  secondary: {
    margin: theme.spacing(1, 0, 0, 0),
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
    <Paper elevation={2} className={css.secondary}>
      <nav aria-label="Secondary">
        {menu.map((x) => (
          <BigMenu
            key={x.title}
            title={x.title}
            groups={x.groups}
            onClose={onClose}
          />
        ))}
      </nav>
    </Paper>
  );
};

export default SecondaryNavigation;
