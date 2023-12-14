import { mode, Styles } from "@chakra-ui/theme-tools";

const styles: Styles = {
  global: (props) => ({
    html: {
      scrollBehavior: "smooth",
      height: "100%",
    },
    "@-moz-document url-prefix()": {
      html: {
        scrollBehavior: "auto",
      },
    },
    "#__next": {
      height: "100%",
    },
    body: {
      fontFamily: "body",
      color: mode("font.primary", "whiteAlpha.900")(props),
      bg: mode("white", "gray.800")(props),
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
      height: "100%",
      "&::-webkit-scrollbar": {
        width: "2",
      },
      "&::-webkit-scrollbar-track": {
        background: "scrollBarTrack",
      },
      "&::-webkit-scrollbar-thumb": {
        background: "scrollBarThumb",
      },
      "&::-webkit-scrollbar-thumb:hover": {
        background: "scrollBarThumbHover",
      },
    },
    "*::placeholder": {
      color: mode("gray.400", "whiteAlpha.400")(props),
    },
    "*, *::before, &::after": {
      borderColor: mode("gray.200", "whiteAlpha.300")(props),
      wordWrap: "break-word",
    },
  }),
};

export default styles;
