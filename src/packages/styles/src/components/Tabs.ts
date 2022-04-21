import { css } from "@packages/web";

export const TabRoot = css({
  width: "1120px",
});

export const TabsContent = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",

  paddingBottom: "98px",
  margin: "0 24px",

  background: "$grey-900",

  "&[data-state='inactive']": {
    display: "none",
  },
});

export const TabsTrigger = css({
  position: "relative",
  padding: "16px",
  border: "none",
  background: "none",
  filter: "brightness(0.7)",

  "&:not(:first-child)": {
    marginLeft: "28px",
  },

  svg: {
    height: "33px",
  },

  "&[aria-selected=true]": {
    filter: "none",

    "&::after": {
      content: "",
      position: "absolute",
      bottom: "0px",
      height: "3px",
      borderRadius: "2px",
      background: "$success-light",
      transition: "all 0.3s ease-in-out 0s",
      transform: "translateX(0px)",
      left: "0px",
      width: "100%",
    },
  },
});

export const TabsList = css({
  marginLeft: "24px",

  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  borderBottom: "1px solid $grey-600",
  width: "100%",
});
