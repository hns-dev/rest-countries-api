module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        blue: {
          light: "hsl(209, 23%, 22%)",
          dark: "hsl(207, 26%, 17%)",
          darker: "hsl(200, 15%, 8%)",
        },
        gray: {
          light: "hsl(0, 0%, 98%)",
          dark: "hsl(0, 0%, 52%)",
        },
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        primary: ["Nunito Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
