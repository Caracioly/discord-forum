/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray" : "#bbbdbe",
        "red" : "#f23f42",
        "light-blue" : "#0896de",
        "blue-hover" : "#656dc9",
        "blue-button" : "#4752c4",
        "gray-container" : "#313338",
        "gray-main" : "#282a2e",
        "gray-input" : "#1e1f22"
      }
    },
  },
  plugins: [],
}