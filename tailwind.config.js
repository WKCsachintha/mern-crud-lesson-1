module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        deep_purple: { A200: "#7041f5" },
        white: { A700: "#ffffff" },
        black: { 900: "#0d0d13", "900_ba": "#0d0d13ba" },
        gray: { 100: "#f5f5f5", 600: "#897e7e" },
      },
      boxShadow: {},
      backgroundImage: {
        gradient: "linear-gradient(180deg, #0d0d13ba,#525279ba)",
        gradient1: "linear-gradient(90deg, #0d0d13ba,#525279ba)",
      },
      fontFamily: { sen: "Sen", inter: "Inter", imprintmtshadow: "Imprint MT Shadow" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
