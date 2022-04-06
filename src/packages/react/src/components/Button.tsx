import React, { forwardRef } from "react";
import { ButtonCSS, ButtonLabelCSS, ButtonLoadingCSS } from "@packages/styles";
import { styled } from "@packages/web";

const StyledButton = styled("button", ButtonCSS);
const ButtonLabel = styled("span", ButtonLabelCSS);
const ButtonLoading = styled("span", ButtonLoadingCSS);

export type ButtonProps = React.ComponentProps<typeof StyledButton> & {
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  loading?: boolean;
  outlined?: boolean;
};

export const Button = forwardRef<
  React.ElementRef<typeof StyledButton>,
  ButtonProps
>(
  (
    {
      children,
      loading,
      leftIcon,
      rightIcon,
      outlined = false,
      disabled,
      ...props
    },
    forwardedRef
  ) => {
    return (
      <StyledButton
        outlined={outlined}
        disabled={disabled}
        loading={loading}
        ref={forwardedRef}
        {...props}
      >
        <ButtonLabel>
          {leftIcon}
          <span>{children}</span>
          {rightIcon}
        </ButtonLabel>

        {loading && <ButtonLoading>carregando</ButtonLoading>}
      </StyledButton>
    );
  }
);
