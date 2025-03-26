/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "3d": {
          "orange-100": "#C98B6A",
          "orange-200": "#D95D39",
          "blue-100": "#6590E2",
          "blue-200": "#2A68DF",
          "red-100": "#D34043",
          "red-200": "#942F30",
        },
      },
      fontFamily: {
        fraunces: ["var(--font-fraunces"],
        "francois-one": ["var(--font-francois-one)"],
      },
    },
  },
  plugins: [],
};
