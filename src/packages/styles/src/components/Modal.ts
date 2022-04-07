import { css, keyframes } from "@packages/web";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

const overlayHide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 },
});

const contentShow = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96)",
  },
  "100%": { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
});

const contentHide = keyframes({
  "0%": { opacity: 1, transform: "translate3d(-50%, -50%, 0) scale(1)" },
  "100%": {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96)",
  },
});

export const ModalOverlay = css({
  backgroundColor: "rgba(0,0,0,0.9)",
  position: "fixed",
  inset: 0,
  zIndex: "$overlay",

  "&[data-state=open]": {
    animation: `${overlayShow} 0.2s ease-in`,
  },

  "&[data-state=closed]": {
    animation: `${overlayHide} 0.2s ease-in`,
  },
});

export const ModalWrapper = css({
  position: "fixed",
  top: "50%",
  left: "50%",
  backfaceVisibility: "hidden",
  transform: "translate3d(-50%, -50%, 0)",
  width: "90vw",
  maxWidth: "$$maxWidth",
  background: "#ccc",
  overflowY: "auto",
  zIndex: "$modal",
  borderRadius: "4px",

  "&[data-state=open]": {
    animation: `${contentShow} 0.3s ease-out`,
  },

  "&[data-state=closed]": {
    animation: `${contentHide} 0.2s ease-out`,
  },
});

export const ModalContent = css({
  padding: "8px",
});
