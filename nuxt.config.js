import fs from 'fs'
import path from 'path'
import FMMode from 'frontmatter-markdown-loader/mode'
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'

hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)

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
  plugins: [],
  // some nuxt config...
  css: [
    '@/assets/scss/main.scss',
    'github-markdown-css',
    'highlight.js/styles/github.css'
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: ['@nuxtjs/eslint-module', '@nuxtjs/stylelint-module'],
  /*
   ** Nuxt.js modules
   */
  modules: ['nuxt-buefy', '@nuxtjs/pwa', '@nuxtjs/dotenv'],

  generate: {
    routes: getPaths()
  },

  router: {
    base: process.env.DEPLOY_DIR
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
          },
          markdownIt: {
            html: true,
            highlight(str, lang) {
              if (lang && hljs.getLanguage(lang)) {
                try {
                  return hljs.highlight(lang, str).value
                } catch (__) {}
              }

              return '' // use external default escaping
            }
          }
        }
      })
    }
  }
}
