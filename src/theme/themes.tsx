import { createTheme } from "@material-ui/core";

var baseTheme = createTheme({
  typography: {
    fontFamily: ["BinancePlex", "Arial", "sans-serif"].join(","),
    body1: {
      fontSize: "12px",
    },
    body2: {
      fontSize: "14px",
    },
    subtitle1: {
      fontSize: "20px",
    },
    subtitle2: {
      fontSize: "16px",
    },
  },
});

const darkTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "dark",
    background: {
      default: "#252930", //trade view container's background
      paper: "#181A20", //header background
    },
    primary: {
      main: "#161A1E", //trade view component's background
      dark: "#1e2329", // modal background
      light: "#1e2329", //dropdown background
    },
    //trade view font color
    secondary: {
      main: "#848e9c", //gery color
      dark: "#eaecef", //white color
      light: "#f0b90b", //hover color
    },
    //status change color
    info: {
      main: "#03a66d", //green
      dark: "#f6465d", //red
      light: "#1e2026", //orderform background
    },
    //status change progressbar color
    success: {
      main: "#0ecb81", //green
      dark: "#f6465d", //red
      light: "#2a2d35", //order form input div
    },
    // header font color & trade view statistic main color// header font color
    text: {
      primary: "#848e9c", //gery color
      secondary: "#eaecef", //white color
      hint: "#b7bdc6", //statistic main color
      disabled: "#f0b90b", //header menu hover and active of font color & font color of Log In, Rigerster Now
    },
  },
});

const lightTheme = createTheme({
  ...baseTheme,
  palette: {
    type: "light",
    background: {
      default: "#eef0f2", //trade view container's background
      paper: "#161A1E", //header background
    },
    primary: {
      main: "#FAFAFA", //trade view component's background
      dark: "#FFFFFF", //modal background
      light: "#1e2329", //dropdown background
    },
    //trade view font color
    secondary: {
      main: "#707a8a", //gery color
      dark: "#1e2329", //white color
      light: "#c99400", //hover color
    },
    //status change color
    info: {
      main: "#03a66d", //green
      dark: "#cf304a", //red
      light: "#fff", //orderform background
    },
    //status change progressbar color
    success: {
      main: "#0ecb81", //green
      dark: "#f6465d", //red
      light: "#f0f1f2", //order form input div
    },
    // header font color & trade view statistic main color
    text: {
      primary: "#848e9c", //gery color
      secondary: "#eaecef", //white color
      hint: "#474d57", //statistic main color
      disabled: "#f0b90b", //header menu hover font color & Log In, Rigerster Now's fixed Color
    },
  },
});

export { lightTheme, darkTheme };
