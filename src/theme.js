import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Nunito Sans', sans-serif`,
  },
  colors: {
    ml: {
      yellow: "#fff15a",
      grey: "#333",
      greyBg: "#efefef",
      greyAlpha: "#6c6a6a",
      blue: "#3483fa",
      blueHover: "#0049b6",
      green: "#00a650",
    },
  },
});
export default theme;
