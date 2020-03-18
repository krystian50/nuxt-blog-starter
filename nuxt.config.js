module.exports = {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Plugins to load before mounting the App
   */
  // plugins: [{ src: '~plugins/nuxt-quill.plugin', ssr: false }],
  // some nuxt config...
  css: [
    '@/assets/scss/main.scss'
    // ...
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://buefy.github.io/#/documentation
    'nuxt-buefy',
    // Doc: https://axios.nuxtjs.org/usage
    // '@nuxtjs/axios',
    // '@nuxtjs/auth',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyAJSsSZCB-rxrMeqBHRHwxfCY0bMRT6uBw',
          authDomain: 'blog-caf22.firebaseapp.com',
          databaseURL: 'https://blog-caf22.firebaseio.com',
          projectId: 'blog-caf22',
          storageBucket: 'blog-caf22.appspot.com',
          messagingSenderId: '200689777316',
          appId: '1:200689777316:web:15d5109d5965b3453cc431',
          measurementId: 'G-EEQNZLJ426'
        },
        services: {
          auth: {
            persistence: 'local', // default

            // it is recommended to configure either a mutation or action but you can set both
            initialize: {
              onAuthStateChangedMutation: 'ON_AUTH_STATE_CHANGED_MUTATION'
              // onAuthStateChangedAction: 'onAuthStateChangedAction'
            },

            ssr: true
          },

          firestore: true
        }
      }
    ]
  ],

  // pwa: {
  //   // disable the modules you don't need
  //   meta: false,
  //   icon: false,
  //   // if you omit a module key form configuration sensible defaults will be applied
  //   // manifest: false,

  //   workbox: {
  //     importScripts: [
  //       // ...
  //       '/firebase-auth-sw.js'
  //     ],
  //     // by default the workbox module will not install the service worker in dev environment to avoid conflicts with HMR
  //     // only set this true for testing and remember to always clear your browser cache in development
  //     dev: true
  //   }
  // },

  auth: {
    strategies: {
      google: {
        client_id:
          '200689777316-3tflv93845jcei2c5303fu3159mnkurt.apps.googleusercontent.com'
      },
      github: {
        client_id: '97512efe7cb4271d2fcf',
        client_secret: 'b3a9d4ffe6630e4a11d28bc045365b6d8ed29db2'
      }
    }
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'
    }
  }
}
