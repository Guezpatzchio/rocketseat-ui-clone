const baseColors = {
  "rocketseat-light": "#996DFF",
  "rocketseat-mid": "#8257E5",
  "rocketseat-dark": "#633BBC",
  "rocketseat-low": "#271A45",

  "discover-light": "#6A80FF",
  "discover-mid": "#4863F7",
  "discover-dark": "#3249CB",
  "discover-low": "#182049",

  "ignite-light": "#00B37E",
  "ignite-mid": "#00875F",
  "ignite-dark": "#015F43",
  "ignite-low": "#00291D",

  "ec-light": "#FC4737",
  "ec-mid": "#D73628",
  "ec-dark": "#AD1E12",
  "ec-low": "#42110D",

  "success-light": "#04D361",
  "success-base": "#1B873F",
  "success-low": "#051B0D",

  "danger-light": "#F75A68",
  "danger-base": "#CC2937",
  "danger-low": "#2D090C",

  "warning-light": "#FBA94C",
  "warning-base": "#EB8A1D",
  "warning-low": "#2E1B06",

  "new-light": "#1EF7D0",
  "new-base": "#07847E",
  "new-low": "#163840",

  white: "#FFFFFF",
  black: "#000000",

  "grey-100": "#E1E1E6",
  "grey-200": "#C4C4CC",
  "grey-300": "#8D8D99",
  "grey-400": "#7C7C8A",
  "grey-500": "#505059",
  "grey-600": "#323238",
  "grey-700": "#29292E",
  "grey-800": "#202024",
  "grey-900": "#121214",
  "grey-950": "#09090A",
};

const rootDemo = {
  background: "#121214",
  "ignite-green": "#00875f",
  "discover-blue": "#4863f7",
  green: "#04d361",
  "green-low": "#1c2a24",
  "green-darker": "#0f3924",
  "success-low": "#051b0d",
  red: "#ce4a4a",
  "red-light": "#eb3223",
  "red-darker": "#3d1b23",
  error: "#e83f5b",
  orange: "#ff7a29",
  "orange-darker": "#412c17",
  "orange-darkness": "#593918",
  yellow: "#ffcd1e",
  primary: "#8257e5",
  "primary-darker": "#28203e",
  "primary-hover": "#9466ff",
  "primary-border": "#6833e4",
  "primary-shape": "#734bd1",
  "primary-light": "#996dff",
  gray: "#e1e1e6",
  text: "#a8a8b3",
  "base-text": "#c4c4cc",
  
  shape: "#202024",
  "shape-dark": "#3c3c42",
  "shape-hover": "#29292e",
  icons: "#41414d",
  attention: "#fd951f",
  borders: "#323238",
  experts: "#db3a2c",
  dowhile: "#ff068a",
  explorer: "#42d3ff",
  black: "#09090a",
  white: "#fff",
  scrollbar: "#4d4d57",
  "scrollbar-background": "transparent",
  discover: "##6a80ff",
};

const root = {
  support: "#737380",
}

const aliases = {
  "text-title": baseColors["grey-100"],
  "text-base": baseColors["grey-200"],
  "text-support": baseColors["grey-300"],
  placeholder: baseColors["grey-400"],
  "inputs-icons": baseColors["grey-500"],
  "shape-tertiary": baseColors["grey-600"],
  "shape-secondary": baseColors["grey-700"],
  "shape-primary": baseColors["grey-800"],
  "color-background": baseColors["grey-900"],
};

export const colors = { ...baseColors, ...aliases, ...root };
