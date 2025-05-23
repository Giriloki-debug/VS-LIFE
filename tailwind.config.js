/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
    theme: {
      screens: {
        mobile: '480px',
        tablet: '640px',
        laptop: '1024px',
        desktop: '1280px'
      },

    extend: {fontFamily: {
      ubuntu: ["Ubuntu", "sans-serif"],
    },},
  },
  plugins: [],
}

