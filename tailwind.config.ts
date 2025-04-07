/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        "3d-blue-secondary": "8px 8px 0px 0px #2a68df",
        "3d-red-secondary": "8px 8px 0px 0px #942f30",
      },
    },
  },
  plugins: [],
};
