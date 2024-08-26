/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'c-orange': 'hsl(26, 100%, 55%)',
        'pale-orange': 'hsl(25, 100%, 94%)',
        'very-dark-blue': 'hsl(220, 13%, 13%)',
        'dark-grayish-blue': 'hsl(219, 9%, 45%)',
        'grayish-blue': 'hsl(220, 14%, 75%)',
        'light-grayish-blue': 'hsl(223, 64%, 98%)',
      },
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif']
      },
      borderWidth: {
        '1': '1px',
        '3': '3px'
      },
      width: {
        '300p': '300px',
        '307p': '307px'
      },
      height: {
        '300p': '300px',
        '307p': '307px'
      },
    },
  },
  plugins: [],
}

