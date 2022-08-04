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
  plugins: ['~/plugins/maps.client.js', '~/plugins/dataApi.js'],
  env: {
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
    ALGOLIA_APP_ID: process.env.ALGOLIA_APP_ID,
    ALGOLIA_API_KEY: process.env.ALGOLIA_API_KEY,
  },
}
