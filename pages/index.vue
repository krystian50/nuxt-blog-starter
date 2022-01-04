<template>
  <div>
    <div class="hero is-primary is-medium main-banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Witaj na moim blogu
          </h1>
          <span class="subtitle">
            Dostępne artykuły poniżej
          </span>
        </div>
      </div>
    </div>

    <div class="section">
      <main class="container">
        <div class="columns is-multiline">
          <div v-for="post in posts" :key="post.id" class="column is-3">
            <Card :post="post" />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import Card from '~/components/homepage/Card'

export default {
  name: 'HomePage',

  components: {
    Card
  },

  data: () => ({
    posts: []
  }),

  created() {
    const req = require.context('~/articles', false, /\.(md)$/)

    req.keys().forEach((filePath) => {
      const key = filePath.replace('./', '').replace('.md', '')
      const { attributes } = require(`~/articles/${key}.md`)

      this.posts.push({
        id: key,
        slug: key,
        imgURL: attributes.imgURL,
        uploadAt: attributes.uploadAt,
        author: attributes.author,
        title: attributes.title,
        desc: attributes.desc
      })
    })
  }
}
</script>
