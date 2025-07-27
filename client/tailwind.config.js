/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",                 // Vite's root HTML
    "./src/**/*.{js,ts,jsx,tsx}",   // All React components
  ],
  theme: {
    extend: {},                     // Add custom styles here later
  },
  plugins: [],                      // Add tailwind plugins here if needed
}