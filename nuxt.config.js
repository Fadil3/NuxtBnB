export default {
  components: true, // auto-generate components from .vue files
  head: {
    titleTemplate: 'Mastering Nuxt.js - %s', // page title with template
    htmlAttrs: {
      lang: 'en', // menambahkan atribut lang
    },
    bodyAttrs: {
      class: ['mys-style'], // menambahkan atribut class
    },
    meta: [
      {
        charset: 'utf-8', // menambahkan meta charset
      },
    ],
  },
  router: {
    prefetchLinks: false, // disable prefetch link
  },
  plugins: ['~/plugins/maps.client'],
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
}
