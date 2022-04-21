import { styled } from "@packages/web";

export const Root = styled("div", {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
});

export const Image = styled("div", {
  svg: {
    width: "100%",
  },

  image: {
    width: "100%",
  },
});

export const Content = styled("div", {
  paddingTop: "40px",
  maxWidth: "556px",

  h4: {
    fontSize: "32px",
    lineHeight: "36px",
    marginBottom: "24px",
    maxWidth: "445px",
    fontWeight: "700",
    color: "$grey-100",
  },

  p: {
    lineHeight: "26px",
    color: "$grey-100",
    fontSize: "16px",
    maxWidth: "528px",
  },

  ".buttonWrapper": {
    marginTop: "32px",
    marginBottom: "60px",

    button: {
      height: "56px",
      fontSize: "14px",
      fontWeight: "700",
      lineHeight: "26px",
      textTransform: "uppercase",
      padding: "0 40px",


      display: "flex",
      alignItems: "center",
      justifyContent: "center", 
    },
  },

  ".buttonIcon": {
    width: "24px",
    height: "24px",
    marginLeft: "15px",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",

    svg: {
      width: "100%",
      height: "100%",
    },
  },
});

export const Testimonial = styled("footer", {
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
