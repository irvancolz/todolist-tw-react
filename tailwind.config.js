/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-light": "#F7F7F7",
        "main-dark": "#252525",
        "main-purple": "#6C63FF",
        "dark-purple": "#534CC2",
        "focus-purple": "#6c63ffc2",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
