// src/gatsby-theme-material-ui-top-layout/theme.js

const primary = "#0766ad";
const secondary = "#98ca34";

const theme = {
  typography: {
    fontFamily: "Open Sans",
    fontWeightRegular: "400",
  },
  palette: {
    background: {},
    primary: {
      main: primary,
    },
    secondary: {
      main: secondary,
    },
    text: {},
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
        a: {
          color: primary,
        },
      },
    },
  },
};

export default theme;
