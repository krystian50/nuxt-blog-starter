<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <div class="content" v-html="content"></div>
</template>
<script>
import MarkdownIt from 'markdown-it'
// import VRuntimeTemplate from 'v-runtime-template'

export default {
  // components: { VRuntimeTemplate },

  props: {
    markdown: { type: String, required: true }
  },

  computed: {
    content() {
      const md = new MarkdownIt({
        linkify: true,
        typographer: true
      })
      // .use(require('markdown-it-deflist'))
      // .use(require('markdown-it-sub'))
      // .use(require('markdown-it-sup'))
      // .use(require('markdown-it-footnote'))
      console.log(unescape(this.markdown))
      const html = md.render(unescape(this.markdown))
      // html = this.useResponsiveImages(html)
      // html = this.wrapTable(html)
      // html = html.replace(/<table>/g, '<table class="table is-striped">')
      return `<div class="content">${html}</div>`
    }
  }
}
</script>
