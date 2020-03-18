<template>
  <div class="editor-form">
    <b-button
      class="publish-button"
      type="is-success"
      icon-left="check"
      @click="$emit('publish', form)"
      >Opublikuj</b-button
    >

    <b-field label="Tytuł">
      <b-input v-model="form.name" />
    </b-field>

    <b-field label="Krótki opis">
      <b-input v-model="form.desc" type="textarea" />
    </b-field>

    <b-field label="Podpis">
      <b-input v-model="form.author" />
    </b-field>

    <b-field label="Link do zdjęcia">
      <b-input v-model="form.imgURL" />
    </b-field>

    <b-field label="Artykuł" />
    <b-tabs>
      <b-tab-item label="Editor">
        <client-only
          ><quill-editor
            ref="myQuillEditor"
            v-model="form.content"
            :options="editorOption"
        /></client-only>
      </b-tab-item>
      <b-tab-item label="Preview">
        <!-- eslint-disable-next-line vue/no-v-html -->
        <article v-html="form.content"></article>
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
    editorOption: null,
    form: {
      content: null,
      name: '',
      desc: '',
      author: '',
      imgURL: ''
    }
  }),
  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill
    }
  },
  beforeMount() {
    const VueQuillEditor = require('vue-quill-editor')

    this.extendQuill()

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
    },

    extendQuill() {
      const Quill = require('quill')

      const DirectionAttribute = Quill.import('attributors/attribute/direction')
      Quill.register(DirectionAttribute, true)

      const AlignClass = Quill.import('attributors/class/align')
      Quill.register(AlignClass, true)

      const BackgroundClass = Quill.import('attributors/class/background')
      Quill.register(BackgroundClass, true)

      const ColorClass = Quill.import('attributors/class/color')
      Quill.register(ColorClass, true)

      const DirectionClass = Quill.import('attributors/class/direction')
      Quill.register(DirectionClass, true)

      const FontClass = Quill.import('attributors/class/font')
      Quill.register(FontClass, true)

      const SizeClass = Quill.import('attributors/class/size')
      Quill.register(SizeClass, true)

      const AlignStyle = Quill.import('attributors/style/align')
      Quill.register(AlignStyle, true)

      const BackgroundStyle = Quill.import('attributors/style/background')
      Quill.register(BackgroundStyle, true)

      const ColorStyle = Quill.import('attributors/style/color')
      Quill.register(ColorStyle, true)

      const DirectionStyle = Quill.import('attributors/style/direction')
      Quill.register(DirectionStyle, true)

      const FontStyle = Quill.import('attributors/style/font')
      Quill.register(FontStyle, true)

      const SizeStyle = Quill.import('attributors/style/size')
      Quill.register(SizeStyle, true)
    }
  }
}
</script>
<style lang="scss" scoped>
.editor-form {
  min-height: 1000px;
}
.publish-button {
  position: absolute;
  right: 0;
}
</style>

<style lang="scss">
.ql-snow .ql-editor blockquote {
  border-left: 4px solid rgb(204, 34, 34);
  margin-bottom: 5px;
  margin-top: 5px;
  padding-left: 16px;
}
</style>
