import React from "react";
import {
  TabsContentCSS,
  TabsListCSS,
  TabsTriggerCSS,
  TabRootCSS,
} from "@packages/styles";
import * as TabsComponent from "@radix-ui/react-tabs";
import { styled } from "@packages/web";

const StyledTabsRoot = styled(TabsComponent.Root, TabRootCSS);
const StyledTabsContent = styled(TabsComponent.Content, TabsContentCSS);
const StyledTabsList = styled(TabsComponent.List, TabsListCSS);
const StyledTabsTrigger = styled(TabsComponent.Trigger, TabsTriggerCSS);

export type TabsProps = React.ComponentProps<typeof TabsComponent.Root>;

export const Tabs = ({ children, ...props }: TabsProps) => {
  return <StyledTabsRoot {...props}>{children}</StyledTabsRoot>;
};

export const TabsTrigger = StyledTabsTrigger;
TabsTrigger.displayName = "TabsTrigger";

export const TabsContent = StyledTabsContent;
TabsContent.displayName = "TabsContent";

export const TabsList = StyledTabsList;
TabsList.className = "TabsList";
