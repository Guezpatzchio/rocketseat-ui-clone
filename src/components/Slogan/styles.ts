import { styled } from "@packages/web";

export const Root = styled("section", {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  paddingTop: "80px",
});

export const Content = styled("div", {
  width: "1120px",
  marginBottom: "80px",
  textAlign: "center",

  h3: {
    fontSize: "48px",
    lineHeight: "54px",
    fontWeight: "700",
    color: "$text-title",
  },

  p: {
    marginTop: "24px",
    lineHeight: "26px",
    fontWeight: "400",
    color: "$text-title",
    fontSize: "16px",
  },
});

export const Line = styled("div", {
  display: "flex",
  justifyContent: "center",
  marginBottom: "60px",

  ".line": {
    width: "1.5px",
    height: "80px",
    background: "linear-gradient(180deg,#996dff,rgba(153,109,255,0))",
  },
});
