
// nuxt.config.ts
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",

  devtools: { enabled: true },

  css: [
    '~/assets/css/tailwind.css',
    '@fortawesome/fontawesome-free/css/all.min.css',
  ],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ['@vueuse/nuxt'],

  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          
          href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Emblema+One&display=swap'
        }
      ]
    }
  }
});