import { styled } from "@packages/web";

export const Root = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
});

export const Rocket = styled("div", {
  width: "396px",
  display: "flex",
  marginRight: "32px",

  svg: {
    width: "100%",
  },
});

export const Content = styled("div", {
  width: "480px",

  ".image": {
    textAlign: "left",
    position: "relative",
    marginBottom: "40px",
    height: "50px",
    width: "200px",
  },

  h4: {
    fontSize: "32px",
    lineHeight: "36px",
    marginBottom: "24px",
    maxWidth: "378px",
    fontWeight: "700",
    color: "$grey-100",
  },

  p: {
    lineHeight: "26px",
    color: "$grey-100",
    fontSize: "16px",
  },
});

export const Footer = styled("footer", {
  marginTop: "24px",
  display: "flex",
  alignItems: "center",

  "& > span": {
    fontSize: "14px",
    lineHeight: "22px",
    color: "#a8a8b3",
    maxWidth: "199px",
  },

  strong: {
    color: "$grey-100",
  },

  button: {
    width: "100%",
    height: "56px",
    borderRadius: "5px",
    maxWidth: "162px",
    fontSize: "14px",
    fontWeight: "700",
    lineHeight: "26px",
    textTransform: "uppercase",
    marginRight: "60px",
    alignItems: "center",
  },
});
