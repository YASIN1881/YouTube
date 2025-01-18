/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        'gradient': 'linear-gradient(90deg, #FF0033 0%, #F50057 100%)',
        'pink-gradient': 'linear-gradient(90deg, rgba(255,255,255,0.3) 0%, rgba(255,0,128,1) 100%)',
        'red': '#FF0033',
        'redBackground': 'linear-gradient(90deg, rgba(255,255,255,0.06) 0%, rgba(255,0,51,0.06) 100%)',
        'redButton': 'linear-gradient(to right, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2), rgba(255, 50, 91, 1))',
        'redLight': '#FFAABB',
        'backgroundSelected': '#FFAABB'
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
      addVariant('group-hover-child', '.group:hover & > *');
    }
  ],
}

