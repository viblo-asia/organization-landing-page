import { pageSEO, defaultSEOData } from './utils/seo'
import { ROUTER_BASE, PUBLIC_PATH, GOOGLE_ANALYTICS_TRACK_ID } from './env/nuxt'

export default {
  mode: 'spa',

  env: {
    ROUTER_BASE,
    GOOGLE_ANALYTICS_TRACK_ID
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
    '~/plugins/i18n.js',
    '~/plugins/vue-gtag.client.js',
  ],

  buildModules: [
    '@nuxtjs/google-analytics',
  ],

  googleAnalytics: {
    id: GOOGLE_ANALYTICS_TRACK_ID,
    debug: {
      sendHitTask: true,
    },
  },

  router: {
    base: ROUTER_BASE,
    middleware: 'i18n'
  },

  generate: {
   routes: [
     `${ROUTER_BASE}`,
     `${ROUTER_BASE}/en-US`,
     `${ROUTER_BASE}/vi-VN`
   ]
  },

  /*
  ** Build configuration
  */
  build: {
    publicPath: PUBLIC_PATH
  }
}
