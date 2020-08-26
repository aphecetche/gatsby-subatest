// src/gatsby-theme-material-ui-top-layout/theme.js

const theme = {
  typography: {
    fontFamily: "Open Sans",
    fontWeightRegular: "400",
  },
  palette: {
    background: {},
    primary: {
      main: "#0766ad",
    },
    secondary: {
      main: "#98ca34",
    },
    text: {},
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          WebkitFontSmoothing: "auto",
        },
      },
    },
  },
};

export default theme;
