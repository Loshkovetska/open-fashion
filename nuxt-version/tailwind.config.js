module.exports = {
  content: ["src/**/*.{ts, tsx, vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#A8715A",
        secondary: "#DD8560",
        white: "#FFFFFF",
        "gray-label": "#555555",
        "gray-body": "#333333",
        "gray-placeholder": "#888888",
        "gray-light": "#C4C4C4",
        "gray-opacity": "#c4c4c41a",
        "gray-border": "#DEDEDE",
      },
      fontFamily: {
        sans: '"Tenor Sans", sans-serif',
        serif: '"Bodoni Moda", serif',
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(167px, 1fr));",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
