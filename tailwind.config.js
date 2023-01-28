/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{ts,tsx,css}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        primary: '#181d29',
        secondary: '#1d2331',
        brand: '#dc2626',
        'brand-hover': '#b91c1c'
      },
      fontFamily: {
        brand: ['Brandon Grotesque', 'Black'],
        'proxima-nova': ['proxima-nova', 'sans-serif', 'Helvetica', 'arial', 'sans-serif']
      },
      fontSize: {
        '5.5xl': '3.5rem'
      },
      borderWidth: {
        '1': '1px'
      },
      maxWidth: {
        '4/5': '80%',
        '9/10': '90%'
      },
      maxHeight: {
        '21': '1.3125rem'
      },
    }
  },
  plugins: [],
};