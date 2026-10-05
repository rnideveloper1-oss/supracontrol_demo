/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#1a56db',
          'blue-dark': '#0f3cb3',
          'blue-light': '#3b82f6',
          'blue-navy': '#002b49',
          green: '#78c043',
          'green-dark': '#63a435',
          'green-light': '#a3e635',
          'green-subtle': '#ecfccb',
          dark: '#001f35',
          slate: '#0f172a',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
