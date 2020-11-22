const primary = {
  light: "#0766ad",
  //dark: "#67B3E5",
  dark: "#85C2E4",
};
const secondary = {
  light: "#98ca34",
  dark: "#CDE59F",
};

const paper = {
  light: "#FFFFFF",
  dark: "#000000",
};

const defaultBackground = {
  light: "white",
  dark: "#424242",
};

const text = {
  light: "rgba(0, 0, 0, 0.87)",
  dark: "rgba(255, 255, 255, 0.87)",
};

const createPalette = (dark) => ({
  palette: {
    type: dark,
    primary: {
      main: primary[dark],
    },
    secondary: {
      main: secondary[dark],
    },
    background: {
      paper: paper[dark],
      default: defaultBackground[dark],
    },
    text: {
      primary: text[dark],
    },
  },
});

export default createPalette;
