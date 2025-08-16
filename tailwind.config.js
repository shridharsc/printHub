/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scans all JavaScript, JSX, TypeScript, and TSX files in the src folder
    "./public/index.html"        // Scans the main HTML file
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}