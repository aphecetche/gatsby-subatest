const primary = {
  light: "#0766ad",
  //dark: "#67B3E5",
  dark: "#85C2E4",
};
const secondary = {
  light: "#98ca34",
  dark: "#CDE59F",
};

const background = {
  light: "#FFFFFF",
  dark: "#000000",
};

const createTheme = (dark, defaultTheme) => {
  console.log("defaultTheme=", JSON.stringify(defaultTheme, null, 4));
  console.log("spacing=", defaultTheme.spacing(1));
  return {
    typography: {
      fontFamily: "Open Sans",
      fontWeightRegular: "400",
    },
    palette: {
      type: dark,
      primary: {
        main: primary[dark],
      },
      secondary: {
        main: secondary[dark],
      },
      background: {
        default: background[dark],
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
      MuiAccordion: {
        root: {
          color: primary[dark],
          position: "inherit",
          backgroundImage: "linear-gradient(left, #98ca34, #ffffff)",
          backgroundRepeat: "repeat-x",
          marginBottom: defaultTheme.spacing(2),
          //...defaultTheme.typography.body2,
        },
      },
      MuiAccordionDetails: {
        root: {
          flexDirection: "column",
          backgroundColor: background[dark],
          color: defaultTheme.palette.text.primary,
        },
      },
      MuiAccordionSummary: {
        root: {
          flexDirection: "row-reverse",
          paddingLeft: 0,
          backgroundColor: background[dark],
          marginBottom: "2px",
        },
        content: {
          paddingLeft: defaultTheme.spacing(2),
          textTransform: "capitalize",
        },
        expandIcon: {
          color: primary[dark],
        },
      },
    },
    props: {
      MuiAccordion: {
        elevation: 0,
      },
      MuiAccordionSummary: {
        elevation: 0,
      },
    },
  };
};

export default createTheme;
