/** @type {import('tailwindcss').Config} */




//
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1200px',   
      '2xl': '1400px', 
      '3xl': '1900px', 
    },
    extend: {
      keyframes: {
        temoignage: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)'},
        },
        partenaire: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-51.5%)'},
        },
      },
      animation: {
        temoignage: 'temoignage 30s linear infinite',
        partenaire:'partenaire 15s linear infinite',
      },
      boxShadow:{
        navBar:'0 1px 5px #030c1e'
      },
      content: {
        quote932: 'url("../src/assets/icon/quote9-32.png")',
        quote964: 'url("../src/assets/icon/quote9-64.png")',
        quote632: 'url("../src/assets/icon/quote6-32.png")',
        quote664: 'url("../src/assets/icon/quote6-64.png")',
      },
    },

  },
  plugins: [],
}

