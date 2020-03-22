<template>
  <div class="container">
    <div class="section">
      <component :is="selectedArticle" />
    </div>
  </div>
</template>

<script>
import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'
import css from 'highlight.js/lib/languages/css'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('css', css)
hljs.registerLanguage('xml', xml)
hljs.registerLanguage('javascript', javascript)

export default {
  data: () => ({
    attributes: {},
    selectedArticle: null
  }),

  created() {
    const markdown = require(`~/articles/${this.$route.params.slug}.md`)
    this.attributes = markdown.attributes
    this.selectedArticle = markdown.vue.component
  },

  mounted() {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block)
    })
  }
}
</script>
