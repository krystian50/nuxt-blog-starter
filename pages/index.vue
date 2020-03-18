<template>
  <div>
    <div class="hero is-primary is-medium main-banner">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Witaj na MasteringVueJS
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

  async asyncData({ app }) {
    const postsRef = app.$fireStore.collection('posts').get()

    return {
      posts: (await postsRef).docs.map((doc) => doc.data())
    }
  },

  mounted() {
    console.log(this.$fireAuth)
  }
}
</script>
<style lang="scss" scoped>
.main-banner {
  // background-image: url('https://devmeetings.org/wp-content/uploads/2020/02/MG_8649.jpg');
}
</style>
