/** @type {import('tailwindcss').Config} */
const constants = {
  red: "#F23C3D",
  green: "#008D64",
  black: "#222222",
  white: "#FFFFFF",
  light: "#E8E7E3",
  yellow: "B5A572",
};
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        full: "90%",
      },
    },
    colors: {
      red: "#F23C3D",
      green: "#008D64",
      black: "#222222",
      white: "#FFFFFF",
      light: "#E8E7E3",
      yellow: "#B5A572",
    },
  },
  plugins: [],
};
