<template>
  <div class="editor-content">
    <b-field label="Tytuł">
      <b-input v-model="name" />
    </b-field>

    <b-field label="Krótki opis">
      <b-input v-model="desc" type="textarea" />
    </b-field>

    <b-field label="Artykuł" />
    <b-tabs>
      <b-tab-item label="Editor">
        <client-only
          ><quill-editor
            ref="myQuillEditor"
            v-model="content"
            :options="editorOption"
        /></client-only>
      </b-tab-item>
      <b-tab-item label="Preview">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <article v-html="content"></article>
      </b-tab-item>
    </b-tabs>
  </div>
</template>
<script>
import 'quill/dist/quill.snow.css'
import Vue from 'vue'
// import hljs from 'highlight.js'
// import 'highlight.js/styles/monokai-sublime.css'

export default {
  data: () => ({
    content: null,
    editorOption: null
  }),
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  beforeMount() {
    const VueQuillEditor = require('vue-quill-editor')
    this.editorOption = {
      theme: 'snow',
      modules: {
        // syntax: {
        //   highlight: (text) => hljs.highlightAuto(text).value
        // },
        toolbar: {
          container: [
            [('bold', 'italic', 'underline', 'strike')],
            ['blockquote', 'code-block'],
            [{ header: 1 }, { header: 2 }],
            [{ list: 'ordered' }, { list: 'bullet' }],
            [{ script: 'sub' }, { script: 'super' }],
            [{ indent: '-1' }, { indent: '+1' }],
            [{ header: [1, 2, 3, 4, 5, 6, false] }],
            [{ font: [] }],
            [{ align: [] }],
            ['link', 'image', 'video'],
            [{ size: [] }],
            [{ color: [] }, { background: [] }]
          ],
          handlers: {
            image: this.imageHandler
          }
        }
      }
    }

    Vue.use(VueQuillEditor)
  },
  methods: {
    imageHandler() {
      const Quill = require('quill')
      const range = this.editor.getSelection()
      const value = prompt('What is the image URL')

      if (value) {
        this.editor.insertEmbed(range.index, 'image', value, Quill.sources.USER)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.editor-content {
  min-height: 1000px;
}
.publish-button {
  position: absolute;
  right: 0;
}
</style>
