/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jite',
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#F6FAFD',
        },
        orange: {
          DEFAULT: '#D9AC68',
        },
        blue: {
          DEFAULT: '#3EC1F3',
        },
        pink: {
          DEFAULT: '#F990BC',
        },
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '20px',
          md: "50px"
        }
      },
      zIndex : {
        '-1' : '-1',
      }
    },
  },
  plugins: [require("daisyui")],
}
