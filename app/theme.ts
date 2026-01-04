import { createTheme } from "@mantine/core";

// Custom color palette for The Plug Vape & Smoke Shop
const pink = [
  "#ffeef5",
  "#ffd6e6",
  "#ffaacc",
  "#ff7ab0",
  "#ff5599",
  "#ec008c", // Main pink color from website
  "#d1007a",
  "#b80068",
  "#9f0056",
  "#860044",
] as const;

const teal = [
  "#e6fffa",
  "#b3fff0",
  "#80ffe6",
  "#4dffdc",
  "#1affd2",
  "#02b35c", // Main teal/green color from website
  "#007e70", // Darker teal from website
  "#0b645a", // Dark teal from website
  "#2a4a46", // Darkest teal background from website
  "#1a3a36",
] as const;

const blue = [
  "#e0f7ff",
  "#b3f0ff",
  "#80e8ff",
  "#4de0ff",
  "#1ad8ff",
  "#02b7dd", // Cyan blue from website
  "#00a8cc",
  "#0099bb",
  "#0088aa",
  "#007799",
] as const;

export const theme = createTheme({
  primaryColor: "teal",
  primaryShade: 6,
  colors: {
    pink,
    teal,
    blue,
  },
  fontFamily:
    "'Open Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
  headings: {
    fontFamily: "'Oswald', sans-serif",
    sizes: {
      h1: { fontSize: "3rem", lineHeight: "1.2" },
      h2: { fontSize: "1.75rem", lineHeight: "1.3" },
      h3: { fontSize: "1.25rem", lineHeight: "1.4" },
    },
  },
  defaultRadius: "md",
  components: {
    Title: {
      defaultProps: {
        c: undefined,
      },
      styles: (theme, params) => ({
        root: {
          ...(params.order === 1 && {
            color: "var(--mantine-color-teal-8)",
          }),
          ...(params.order === 2 && {
            color: "#000000",
          }),
        },
      }),
    },
    Container: {
      defaultProps: {
        sizes: {
          xs: 540,
          sm: 720,
          md: 960,
          lg: 1140,
          xl: 1320,
        },
      },
    },
    Paper: {
      defaultProps: {
        shadow: "sm",
        radius: "md",
        p: "xl",
      },
    },
    Button: {
      defaultProps: {
        radius: "md",
      },
    },
    Anchor: {
      defaultProps: {
        c: "teal",
      },
      styles: {
        root: {
          textDecoration: "none",
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});
