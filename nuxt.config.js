module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */
  head: {
    title: 'Viblo Organization',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Free service for technical knowledge sharing' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://viblo.asia/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/sass/app.scss'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [,
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy'
  ],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //
    }
  }
}
