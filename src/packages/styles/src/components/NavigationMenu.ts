import { css } from "@packages/web";

export const NavigationMenuList = css({
  display: "flex",
  listStyle: "none",
  alignItems: "center",
  justifyContent: "center",
});
export const NavigationMenuItem = css({
  color: "$support",
  cursor: "pointer",
  fontSize: "$md",

  "&:not(:first-child)": {
    marginLeft: "$8",
  },
});

export const NavigationMenuContent = css({
  width: "100%",
  top: "88px",
  left: "0",
  position: "absolute",
  background: "$grey-900",
  zIndex: "$overlay",
  boxShadow: "inset 0 -1px 0 #29292e",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const NavigationMenuLink = css({
  marginTop: "2px",
  padding: "32px 0",
  borderBottom: "2px solid transparent",

  "&:hover": {
    borderColor: "$rocketseat-mid",
    color: "$text-title",
    transition: "border .2s ease, color .2s ease",
  },
});

export const NavigationMenuTrigger = css({
  marginTop: "2px",
  color: "unset",
  font: "unset",
  border: "none",
  background: "none",
  padding: "32px 0",
  borderBottom: "2px solid transparent",

  "&:hover": {
    borderColor: "$rocketseat-mid",
    color: "$text-title",
    transition: "border .2s ease, color .2s ease",
  },

  // "&[data-state=open]": {
  //   span: {
  //     transform: "rotate(-45deg)",
  //   },
  // },

  // "&[data-state=closed]": {
  //   span: {
  //     transform: "rotate(135deg)",
  //   },
  // },

  span: {
    content: "",
    borderStyle: "solid",
    borderWidth: "2px 2px 0 0",
    display: "inline-block",
    height: "7px",
    width: "7px",
    marginLeft: "$1",
    marginRight: "$px",
    marginBottom: "$1",
      transform: "rotate(135deg)",
    // transition: "transform 0.1s ease",
  },
});
