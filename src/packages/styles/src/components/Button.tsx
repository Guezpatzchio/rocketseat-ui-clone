import { css, keyframes } from "@packages/web";

export const Button = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  backgroundColor: "$$backgroundColor",
  color: "$$color",
  border: "1px solid transparent",
  borderRadius: "$sm",
  fontFamily: "$default",
  fontWeight: "$bold",
  cursor: "pointer",
  transition: `background 0.2s ease 0s, box-shadow 0.2s ease 0s`,

  "&:disabled": {
    cursor: "not-allowed",
    opacity: "$medium",
  },

  "&:hover:not(:disabled)": {
    backgroundColor: "$$hoverColor",
  },

  defaultVariants: {
    loading: false,
    size: "md",
    variant: "primary",
  },

  compoundVariants: [
    {
      outlined: true,
      css: {
        border: "1px solid $$backgroundColor",
        background: "transparent",
      }
    }
  ],

  variants: {
    outlined: {
      true: {}
    },
    loading: {
      true: {
        "span:nth-of-type(1)": {
          visibility: "hidden",
        },
      },
    },
    size: {
      sm: {
        height: "$8",
        padding: "0 $4",
        fontSize: "$xs",
      },
      md: {
        height: "$10",
        padding: "0 $6",
        fontSize: "$sm",
      },
      lg: {
        height: "$12",
        padding: "0 $8",
        fontSize: "$sm",
      },
    },
    variant: {
      primary: {
        $$backgroundColor: "$colors$rocketseat-mid",
        $$color: "$colors$white",
        $$hoverColor: "$colors$rocketseat-light",
      },
      secondary: {
        $$backgroundColor: "$colors$shape-secondary",
        $$color: "$colors$text-title",
        $$hoverColor: "$colors$shape-tertiary",
      },
      tertiary: {
        $$backgroundColor: "transparent",
        $$color: "$colors$text-title",
        $$hoverColor: "$colors$shape-secondary",
      },
      danger: {
        $$backgroundColor: "$colors$shape-secondary",
        $$color: "$colors$danger-light",
        $$hoverColor: "$colors$shape-tertiary",
      },
    },
  },
});

export const ButtonLabel = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ButtonLoading = css({
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0px",
  left: "0px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});
