/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4C6BDC",
          300: "#e4ecf8",
          69: "#1159C7",
        },
        footer: {
          100: "#757575 ",
        },
        ourWork: {
          100: "#333333",
        },
      },
      backgroundColor: {
        primary: {
          100: "#4C6BDC",
          200: "#2F51CB",
          69: "#1159C7",
          300: "#e4ecf8",
          400: "#3F58B5",
        },
      },
      padding: {
        18: "4.4rem",
        38: "9.5rem",
        34: "8.8rem",
      },
      width: {
        37: "9.1rem",
        38: "9.5rem",
        34: "8.8rem",
      },
      fontSize: {
        s: "0.7rem",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          ...require("daisyui/src/colors/themes")["[data-theme=light]"],
          primary: "#4C6BDC",
        },
      },
    ],
  },
};
