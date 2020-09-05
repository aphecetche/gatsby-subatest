const primary = {
  light: "#0766ad",
  //dark: "#67B3E5",
  dark: "#85C2E4",
};
const secondary = {
  light: "#98ca34",
  dark: "#CDE59F",
};

const createTheme = (dark) => ({
  typography: {
    fontFamily: "Open Sans",
    fontWeightRegular: "400",
  },
  palette: {
    type: dark,
    background: {},
    primary: {
      main: primary[dark],
    },
    secondary: {
      main: secondary[dark],
    },
    text: {},
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "html, body": {
          height: "100%",
          WebkitFontSmoothing: "auto",
        },
        a: {
          color: primary[dark],
        },
        "#gatsby-focus-wrapper, #___gatsby": {
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "100%",
        },
      },
    },
  },
});

export default createTheme;
