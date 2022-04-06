import { styled } from "@packages/web";

export const Header = styled("header", {
  height: "88px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "inset 0 -1px 0 #29292e",

  ".logo": {
    width: "180px",
  },

  ".wrapper": {
    width: "1120px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  ".buttons": {
    display: "flex",
    alignItems: "center",

    ".enterButton": {
      marginRight: "$4",

      "&:hover": {
        $$hoverColor: "transparent",
      },
    },

    button: {
      padding: "$5 $6",
      fontSize: "$xs",
      lineHeight: "19px",
    },

    ".buttonIcon": {
      marginTop: "$1",
      marginRight: "$2",
    },
  },

  ".submenu": {
    listStyle: "none",
    padding: "70px",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const Main = styled("main", {
  "section": {

  }
});

export const HeroSection = styled("section", {
  paddingBottom: "calc(145px + min(314px, calc((100vh - 78px) / 2)))",
  marginBottom: "min(315px,calc((100vh - 80px) / 2))",
  position: "relative",
  background: "$grey-900",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});
