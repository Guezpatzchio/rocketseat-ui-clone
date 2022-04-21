import { keyframes, styled } from "@packages/web";

export const Root = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: " 1120px",
  margin: "0 auto",
  marginTop: "48px",
  zIndex: "200",

  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
});

export const Content = styled("div", {
  width: "100%",
  marginTop: "122px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  ".buttonIcon": {
    marginLeft: "24px",
  },
});

export const Video = styled("video", {
  display: "flex",
  padding: "unset",
  width: "100%",
  height: "auto",
  border: "1px solid #2f2f2f",
  borderRadius: "10px",
  maxWidth: "1110px",
  maxHeight: "627px",
  overflow: "auto",
  zIndex: "1",
  position: "absolute",
  bottom: "0",
  transform: "translate(calc(50vw - 50%),50%)",
});

const waveAnimation = keyframes({
  "30%": {
    transform: "rotate(0deg)",
  },
  "40%": {
    transform: "rotate(15deg)",
  },
  "50%": {
    transform: "rotate(0deg)",
  },
  "60%": {
    transform: "rotate(15deg)",
  },
  "70%": {
    transform: "rotate(0deg)",
  },
  "80%": {
    transform: "rotate(15deg)",
  },
  "90%": {
    transform: "rotate(0deg)",
  },
});

export const Span = styled("span", {
  fontSize: "18px",
  lineHeight: "21px",
  marginBottom: "16px",
  fontWeight: "400",
  color: "$success-light",

  display: "flex",
  alignItems: "center",

  ".icon": {
    marginRight: "16px",
    width: "24px",
    height: "24px",
    transformOrigin: "70% 70%",
    animation: `${waveAnimation} 2.4s ease-in infinite`,
  },
});

export const Title = styled("h1", {
  maxWidth: "680px",
  fontSize: "56px",
  lineHeight: "60px",
  textAlign: "center",
  marginBottom: "16px",
  color: "$white",
  fontWeight: 700,
});

export const Subtitle = styled("h2", {
  maxWidth: "472px",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "40px",
  color: "$grey-100",
  fontWeight: "400",
});
