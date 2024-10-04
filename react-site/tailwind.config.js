/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'system-ui', 'sans-serif'],
      },
    },
  },
  safelist: [
    'hover:bg-red-500', // Add any classes that might be purged
    'hover:text-white',
    'border-red-500',
    'text-red-500',
  ],
  plugins: [],
}

