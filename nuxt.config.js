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
}
