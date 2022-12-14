/** @type {import('tailwindcss').Config} */
export default {
  plugins: [],
  theme: {
    extend: {
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      height: {
        "52Plus": "14rem",
        "64Plus": "17rem",
      },
      width: {
        "52Plus": "14rem",
        "64Plus": "17rem",
      },
      colors: {
        "background-dark": "#2D2D31",
        "primary": "#9171FC",
        "secondary": "#FE0558"
      }
    },
    screens: {
      'lg': '900px'
    }
  },
  purge: ["./index.html",'./src/**/*.{svelte,js,ts}'], // for unused CSS
  variants: {
    extend: {},
  },
  darkMode: "class", // or 'media' or 'class'
}