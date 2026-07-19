module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Gilroy", "sans-serif"],
        serif: ["Gilroy", "serif"],
      },
      fontSize: {
        xs: "14px",
        sm: "18px",
        md: "20px",
        base: "24px",
        lg: "26px",
        xl: "28px",
        "2xl": "32px",
        "3xl": "36px",
        "4xl": "40px",
        "5xl": "44px",
        "6xl": "48px",
        "7xl": "52px",
      },
      maxWidth: {
        "6xl": "1440px",
      },
      screens: {
        mobile: "480px",
        ipadpro: "834px",
        web: "1280px",
        mobileLandscape: {
          raw: `only screen and (max-height: 450px) and (max-width: 900px) and (orientation: landscape)`,
        },
      },
    },
  },
  plugins: [],
};
