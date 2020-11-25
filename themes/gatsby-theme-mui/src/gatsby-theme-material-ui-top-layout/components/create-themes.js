const createTheme = (theme) => {
  const palette = theme.palette;
  return {
    typography: {
      fontFamily: "Open Sans",
      fontWeightRegular: "400",
    },
    palette,
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "html, body": {
            height: "100%",
            WebkitFontSmoothing: "auto",
            background: theme.palette.background.paper,
            color: theme.palette.text.primary,
            border: "20px solid pink",
          },
          a: {
            color: theme.palette.primary.main,
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
          color: theme.palette.primary.main,
          position: "inherit",
          backgroundImage: `linear-gradient(left, ${theme.palette.secondary.main}, ${theme.palette.background.paper})`,
          backgroundRepeat: "repeat-x",
          marginBottom: theme.spacing(2),
        },
      },
      MuiAccordionDetails: {
        root: {
          flexDirection: "column",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
        },
      },
      MuiAccordionSummary: {
        root: {
          flexDirection: "row-reverse",
          paddingLeft: 0,
          backgroundColor: theme.palette.background.paper,
          marginBottom: "2px",
        },
        content: {
          paddingLeft: theme.spacing(2),
          textTransform: "capitalize",
        },
        expandIcon: {
          color: theme.palette.primary.main,
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
