/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // THIS IS CRITICAL
  ],
  theme: {
    extend: {
      // Add your custom fonts here if you defined them in index.css and want to use them directly via Tailwind classes (e.g., font-libre-baskerville)
      fontFamily: {
        'libre-baskerville': ['"Libre Baskerville"', 'serif'],
        'inter': ['"Inter"', 'sans-serif'],
      },
      // Add your custom colors here if you want to use them directly via Tailwind classes (e.g., bg-arova-green-dark)
      colors: {
        'arova-green-dark': 'var(--arova-green-dark)',
        'arova-green-light': 'var(--arova-green-light)',
        'arova-beige-light': 'var(--arova-beige-light)',
        'arova-beige-medium': 'var(--arova-beige-medium)',
        'arova-red': 'var(--arova-red)',
        'arova-white-off': 'var(--arova-white-off)',
      },
    },
  },
  plugins: [],
}