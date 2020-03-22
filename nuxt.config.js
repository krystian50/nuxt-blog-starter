import fs from 'fs'
import FMMode from 'frontmatter-markdown-loader/mode'
const path = require('path')

function getPaths() {
  return fs
    .readdirSync(path.resolve(__dirname, 'articles'))
    .filter((filename) => path.extname(filename) === '.md')
    .map((filename) => `posty/${path.parse(filename).name}`)
}

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
    '@/assets/scss/main.scss',
    'github-markdown-css'
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
    '@nuxtjs/dotenv'
  ],

  generate: {
    routes: getPaths(),
    dir: 'docs'
  },

  /*
   ** Build configuration
   */
  build: {
    extend(config, _ctx) {
      config.module.rules.push({
        test: /\.md$/,
        loader: 'frontmatter-markdown-loader',
        include: path.resolve(__dirname, 'articles'),
        options: {
          mode: [FMMode.VUE_COMPONENT],
          vue: {
            root: 'markdown-body'
          }
        }
      })
    }
  }
}
