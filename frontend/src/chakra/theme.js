import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em", // 480px
  md: "48em", // 768px
  lg: "62em", // 992px
  xl: "80em", // 1280px
  "2xl": "96em", // 1536px
};

const theme = extendTheme({
  colors: {
    darkGreen: "#18534F",
    middleGreen: "#226D68",
    white: "#ECF8FC",
    sandBeige: "#FEEAA1",
    lightOrange: "#D6955B",
  },
});

export default theme;
