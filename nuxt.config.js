import { pageSEO, defaultSEOData } from './utils/seo'

const isProduction = process.env.NODE_ENV === 'production'
const routerBase = isProduction ? '/organization-feature' : '/'
const publicPath = isProduction ? '/organization-feature' : undefined

export default {
  mode: 'spa',

  env: {
    routerBase
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'Viblo Organization',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ...pageSEO(defaultSEOData)
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'https://viblo.asia/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,500,600' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:400,700&amp;subset=vietnamese' }
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
    '~/plugins/components.js',
    '~/plugins/font-awesome.js',
    '~/plugins/i18n.js'
  ],

  router: {
    base: routerBase,
    middleware: 'i18n'
  },

  generate: {
   routes: [
     `${routerBase}`,
     `${routerBase}/en-US`,
     `${routerBase}/vi-VN`
   ]
  },

  /*
  ** Build configuration
  */
  build: {
    publicPath
  }
}
