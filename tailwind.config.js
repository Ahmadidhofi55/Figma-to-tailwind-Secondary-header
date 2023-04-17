/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      'Inter':['inter', 'sanserif']
    },
    extend: {},
  },
  plugins: ['flowbite/plugin'],
}