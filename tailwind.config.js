module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#A8715A",
        secondary: "#DD8560",
        white: "#FFFFFF",
        grayLabel: "#555555",
        grayBody: "#333333",
        grayPlaceholder: "#888888",
        grayLight: "#C4C4C4",
        grayOpacity: "#c4c4c41a",
        grayBorder: "#DEDEDE",
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
  plugins: [],
};

//88
