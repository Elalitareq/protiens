/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'deep-blue': '#0666c7',
        'vibrant-green': '#4cd819',
        'vibrant-green-light': '#d1f1c6',
        'vibrant-green-dark': '#3d8124',
        'clean-white': '#FFFFFF',
        'energetic-orange': '#FF6600',
        'subtle-gray': '#CCCCCC',
        "new-black":"#1f1f1f",
        "new-black-green":"#2e312c"
      },
    },
  },
  plugins: [],
}
