
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./public/**/*.html",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primaryBlue": '#1175B8',
        "alpha": '#292D32'
      }
    },
    fontFamily: {
      sen: ["Sen", "sans-serif"],
      nunito: ["Nunito", "sans-serif"],
      alpha: ["Inter"],
    },
  },
  plugins: [],
}