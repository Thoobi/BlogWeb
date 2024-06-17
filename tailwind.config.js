/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      height: {
        '120': '467px',
        '16': '67px',
        '24': '323px',
        '65': '260px',
        '100': '420px',
        '200': '500px'
      },
      gap: {
        '25': '120px',
      },
      width: {
        '18': '70px',
        '22': '476px',
        '30': '30%',
      },
      fontFamily: {
        'sans': ["Urbanist"],
      },
      gap: {
        '90': '400px',
      },
    },
  },
  plugins: [],
}

