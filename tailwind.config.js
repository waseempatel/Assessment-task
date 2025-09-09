import colors from 'tailwindcss/colors'

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
        poppins: ['Poppins', 'sans-serif'],
      },
       
      backgroundImage: {
      'white-fade': 'linear-gradient(180deg, rgba(255,255,255,0.15), rgba(255,255,255,0))',
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
