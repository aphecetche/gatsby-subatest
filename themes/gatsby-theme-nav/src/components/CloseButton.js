import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  close: {
    position: "relative",
    zIndex: "0",
    width: (props) => `${props.buttonSize}px`,
    height: (props) => `${props.buttonSize}px`,
    marginBottom: "4px",
    overflow: "hidden",
    color: "transparent",
    background: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    "&:before,&:after": {
      position: "absolute",
      left: "0",
      zIndex: "-1",
      display: "block",
      width: (props) => Math.sqrt(2) * props.buttonSize + "px",
      height: "1px",
      backgroundColor: theme.palette.primary.main,
      transformOrigin: "center left",
      content: '""',
    },
    "&:before": {
      top: "0",
      transform: "rotate(45deg)",
    },

    "&:after": {
      bottom: "0",
      transform: "rotate(-45deg)",
    },
  },
}));

const CloseButton = ({ onClick, children }) => {
  const props = { buttonSize: 16 };
  const classes = useStyles(props);
  return (
    <button className={classes.close} onClick={onClick}>
      {children}
    </button>
  );
};

CloseButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
export default CloseButton;
