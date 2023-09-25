/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        default: ['var(--font-inter)'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100ch', 
          }
        }
      }
    }
  },
  daisyui: {
    themes: [
      "light",
      "emerald",
    ],
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
