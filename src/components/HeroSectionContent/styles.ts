import { keyframes, styled } from "@packages/web";

export const HeroSectionRoot = styled("div", {
  top: "0",
  left: "0",
  width: "100%",
  maxWidth: " 1120px",
  margin: "0 auto",
  marginTop: "48px",
  zIndex: "200",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

export const HeroSectionWrapper = styled("div", {
  width: "100%",
  marginTop: "122px",

  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",

  button: {
    $$hoverColor: "$colors$rocketseat-dark",

    height: "100%",
    maxHeight: "56px",
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "19px",
    padding: "15px 16px 15px 24px",
  },

  ".buttonIcon": {
    marginLeft: "24px",
  },
});

export const HeroSectionVideo = styled("video", {
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
  transform: "translate(0,50%)",
});

const waveAnimation = keyframes({
  "0%": {},
  "100%": {},
});

export const HeroSectionSpan = styled("span", {
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
    animation: `${waveAnimation} 2.5s infinite`,
  },
});

export const HeroSectionTitle = styled("h1", {
  maxWidth: "680px",
  fontSize: "56px",
  lineHeight: "60px",
  textAlign: "center",
  marginBottom: "16px",
  color: "$white",
  fontWeight: 700,
});

export const HeroSectionSubtitle = styled("h2", {
  maxWidth: "472px",
  fontSize: "16px",
  lineHeight: "26px",
  marginBottom: "40px",
  color: "$grey-100",
  fontWeight: "400",
});
