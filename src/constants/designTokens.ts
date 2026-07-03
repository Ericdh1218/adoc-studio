export const designTokens = {
  colors: {
    background: "#F8F7F4",
    surface: "#FFFFFF",
    primary: "#1E1E1E",
    secondary: "#8B7355",
    muted: "#D9D7D2",
    textPrimary: "#1E1E1E",
    textSecondary: "#707070",
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
    "3xl": "64px",
    "4xl": "96px",
    "5xl": "128px",
  },

  radius: {
    none: "0px",
    sm: "4px",
    md: "8px",
    lg: "12px",
    full: "9999px",
  },

  typography: {
    display: '"Metrophobic", sans-serif',
    body: '"Source Serif 4", serif',
  },

  motion: {
    fast: "150ms",
    normal: "300ms",
    slow: "500ms",
    ease: "cubic-bezier(0.19, 1, 0.22, 1)",
  },
} as const;