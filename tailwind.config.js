/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './pages/**/*.{html,vue}',
    './components/**/*.{html,vue}',
    './layouts/**/*.{html,vue}',
    './plugins/**/*.{js,ts}',
  ],
  theme: {
    extend: {
      transitionProperty: {
        colors: "background-color, border-color, color, fill, stroke",
      },
    },
  },
  plugins: [],
}
