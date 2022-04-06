import { styled } from "@packages/web";

export const NavigationMenuCardRoot = styled("li", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "0",
  borderRadius: "5px",
  width: "281px",
  height: "94px",
  cursor: "pointer",

  "&:hover": {
    backgroundColor: "$shape-secondary",
  },

  "&:not(:last-child)": {
    marginRight: "2%",
  },

  svg: {
    maxWidth: "160px",
  },

  p: {
    paddingTop: "8px",
    fontSize: "12px",
    fontWeight: "400",
    color: "$white",
  },
});
