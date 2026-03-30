// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n',
    '@vueuse/motion/nuxt'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'en', file: 'en.json' },
      { code: 'es', file: 'es.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'locales',
    strategy: 'no_prefix'
  },
  app: {
    head: {
      title: 'The Modular Engineer | Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional Portfolio of a Modular Engineer' }
      ],
      link: [
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@300;400;500;600;700&family=Inter:wght@400;500;600&display=swap' }
      ]
    }
  },
  build: {
    transpile: ['@vueuse/motion']
  },
  devServer: {
    port: 3000,
    host: '0.0.0.0'
  }
})
