const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'spa',

  router: {
    base: isProduction ? '/organization-feature' : undefined
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Viblo Organization',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Promoting your Organization to Viblo\'s growing community' }
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
    '~/assets/sass/app.scss',
    '~/assets/sass/libs/animate.scss'
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
    publicPath: '/organization-feature',

    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      //
    }
  }
}
