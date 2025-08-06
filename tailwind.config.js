/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.{vue,js,ts}',
    './pages/**/*.{vue,js,ts}',
    './app.vue',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["'Emblema One'", 'system-ui'],
        body: ["'Poppins'", 'sans-serif'],
      },
      fontSize: {
        'display-1': '7rem',
      },
      keyframes: {
        upDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
    },
    animation: {
        'up-down': 'upDown 1.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
