/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#4C6BDC",
        },
        footer: {
          100: "#757575 ",
        },
      },
      backgroundColor: {
        primary: {
          100: "#4C6BDC",
          200: "#2F51CB",
          69: "#1159C7",
        },
      },
      padding: {
        38: "9.5rem",
        34: "8.8rem",
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
