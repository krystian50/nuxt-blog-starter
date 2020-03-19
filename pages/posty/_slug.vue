<template>
  <div class="blogSelected">
    <component :is="selectedArticle" />
  </div>
</template>

<script lang="js">

export default {
    data: () => ({
      attributes: {},
      selectedArticle: null
    }),

    created() {
      const markdown = require(`~/articles/${this.$route.params.slug}.md`)
      this.attributes = markdown.attributes
      this.selectedArticle = markdown.vue.component
    }
}
</script>
