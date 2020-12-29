module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['hover'],
      maxHeight: ['focus'],
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
