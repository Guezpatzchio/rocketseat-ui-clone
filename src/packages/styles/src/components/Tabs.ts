import { css } from "@packages/web";

export const TabRoot = css({
  width: "1120px",
  borderRadius: "5px",
  overflow: "hidden",
});

export const TabsContent = css({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "56px 72px 80px",
  background: "$grey-900",
  border: "1px solid $grey-700",
  borderBottomLeftRadius: "5px",
  borderBottomRightRadius: "5px",

  "&[data-state='inactive']": {
    display: "none",
  }
});

export const TabsTrigger = css({
  padding: "12px 8px",
  background: "$grey-950",
  border: "1px solid $grey-700",
  fontSize: "16px",
  fontWeight: "400",
  lineHeight: "30px",
  color: "#a8a8b3",
  transition: "background .3s ease",

  "&[aria-selected=true]": {
    border: "unset",
    borderTop: "2px solid $rocketseat-mid",
    background: "$grey-800",
    fontWeight: "700",
    color: "$grey-100",
  },
});

export const TabsList = css({
  overflowX: "auto",
  overflowY: "hidden",
  whiteSpace: "nowrap",
  borderBottom: "1px solid $grey-600",
  width: "100%",
  display: "grid",
  gridTemplateColumns: "repeat(3,1fr)",
});
