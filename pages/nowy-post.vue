<template>
  <div class="container">
    <div class="header">
      <h1 class="title">Dodaj post</h1>

      <b-button class="publish-button" type="is-success" icon-left="check"
        >Opublikuj</b-button
      >
    </div>
    <EditorContent />
  </div>
</template>
<script>
import EditorContent from '~/components/EditorContent'
export default {
  components: {
    EditorContent
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
