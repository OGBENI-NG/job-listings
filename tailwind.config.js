/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-cyan': 'hsl(180, 29%, 50%)',
        'light-grayish-cyan-bg': 'hsl(180, 52%, 96%)',
        'light-grayish-cyan-filter': 'hsl(180, 31%, 95%)',
        'dark-grayish-cyan': 'hsl(180, 8%, 52%)',
        'very-dark-grayish-cyan': 'hsl(180, 14%, 20%)',
        'box-shadow' : 'hsla(180, 29%, 50%, 0.395)'
      },
      fontSize: {
        'default': '15px',
      },
      fontFamily: {
        'sans': ['League Spartan', 'sans-serif'],
      },
      fontWeight: {
        'big': 700,
        'mdm': 500,
      },
      screens: {
        'sm': '370px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1200px',
        'xxl': '1440px',
      }
    },
  },
  plugins: [],
}
