import React from "react";
import {
  NavigationMenuListCSS,
  NavigationMenuContentCSS,
  NavigationMenuItemCSS,
  NavigationMenuLinkCSS,
  NavigationMenuTriggerCSS
} from "@packages/styles";
import * as NavigationMenuComponent from "@radix-ui/react-navigation-menu";
import { styled } from "@packages/web";

const StyledNavigationMenuList = styled(NavigationMenuComponent.List, NavigationMenuListCSS);
const StyledNavigationMenuItem = styled(NavigationMenuComponent.Item, NavigationMenuItemCSS);
const StyledNavigationMenuTrigger = styled(NavigationMenuComponent.Trigger, NavigationMenuTriggerCSS);
const StyledNavigationMenuContent = styled(NavigationMenuComponent.Content, NavigationMenuContentCSS);
const StyledNavigationMenuLink = styled(NavigationMenuComponent.Link, NavigationMenuLinkCSS);
const StyledNavigationMenuIndicator = styled(
  NavigationMenuComponent.Indicator,
  ""
);
const StyledViewportPosition = styled("div", "");

export type NavigationMenuProps = React.ComponentProps<
  typeof NavigationMenuComponent.Root
>;

export const NavigationMenu = ({ children, ...props }: NavigationMenuProps) => {
  return (
    <NavigationMenuComponent.Root {...props}>
      <StyledNavigationMenuList>
        {children}

        <StyledNavigationMenuIndicator />
      </StyledNavigationMenuList>

      <StyledViewportPosition>
        <NavigationMenuComponent.Viewport />
      </StyledViewportPosition>
    </NavigationMenuComponent.Root>
  );
};

export type NavigationMenuItemProps =
  NavigationMenuComponent.NavigationMenuItemProps &
    React.ComponentProps<typeof StyledNavigationMenuItem>;

export const NavigationMenuItem = ({
  children,
  ...props
}: NavigationMenuItemProps) => {
  return <StyledNavigationMenuItem {...props}>{children}</StyledNavigationMenuItem>;
};

export const NavigationMenuTrigger = StyledNavigationMenuTrigger;
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";

export const NavigationMenuContent = StyledNavigationMenuContent;
NavigationMenuContent.displayName = "NavigationMenuContent";

export const NavigationMenuLink = StyledNavigationMenuLink;
NavigationMenuLink.displayName = "NavigationMenuContent";
