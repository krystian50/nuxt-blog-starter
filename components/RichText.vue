<template>
  <!-- eslint-disable-next-line vue/no-v-html -->
  <article v-html="content"></article>
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      default: () => ''
    }
  }
}
</script>
