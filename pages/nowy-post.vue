<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Dodaj post</h1>
    </div>
    <EditorForm @publish="publish" />
  </div>
</template>
<script>
import EditorForm from '~/components/EditorForm'

export default {
  components: {
    EditorForm
  },

  methods: {
    publish(raw) {
      const newPost = {
        ...raw,
        slug: raw.name.toLowerCase().replace(' ', '-'),
        id: raw.name.toLowerCase().replace(' ', '-')
      }

      this.$fireStore
        .collection('posts')
        .doc(newPost.id)
        .set(newPost)
    }
  }
}
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  margin-top: 10px;
}

.publish-button {
  margin-left: 15px;
}
</style>
