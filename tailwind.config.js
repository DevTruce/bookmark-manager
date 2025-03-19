module.exports = {
  content: ["./*.html"],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1020px",
      xl: "1440px",
    },
    extend: {
      colors: {
        softBlue: "hsl(231, 69%, 60%)",
        softRed: "hsl(0, 94%, 66%)",
        grayishBlue: "hsl(229, 8%, 60%)",
        veryDarkBlue: "hsl(229, 31%, 21%)",
        darkBlue: "hsl(217, 28%, 15%)",
        darkBlue1: "hsl(218, 28%, 13%)",
        darkBlue2: "hsl(216, 53%, 9%)",
        darkBlue3: "hsl(219, 30%, 18%)",
      },
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      backgroundImage: theme => ({
        dots: "url('../images/bg-dots.svg')",
        "logo-dark-mode": "url('../images/logo-dark-mode.svg')",
        "logo-light-mode": "url('../images/logo-light-mode.svg')",
      }),
    },
  },
  variants: {
    extend: {
      backgroundImage: ["dark"],
    },
  },
  plugins: [],
};
