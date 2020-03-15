<template>
  <no-ssr><quill-editor ref="myQuillEditor" class="editor"/></no-ssr>
</template>
<script>
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import Vue from 'vue'

export default {
  mounted() {
    const VueQuillEditor = require('vue-quill-editor')

    Vue.use(VueQuillEditor)
  }
}
</script>
<style lang="scss" scoped>
.editor {
  min-height: 70vh;
}
</style>
