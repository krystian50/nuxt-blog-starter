<template>
  <div>
    <div class="hero is-primary is-large main-banner">
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

const getPosts = () => {
  const posts = Array(6)
    .fill()
    .map((el, index) => ({
      id: `post${index}`,
      slug: `kurs-nuxtjs-czesc-${index + 1}`,
      desc: 'W tej części będziemy mówić o lorem ipsum dolor amit',
      img: 'https://nuxtjs.org/logos/nuxt-icon-white.png',
      name: `Kurs NuxtJS - część ${index + 1}`,
      author: 'kfras'
    }))

  return Promise.resolve(posts)
}

export default {
  name: 'HomePage',

  components: {
    Card
  },

  async asyncData() {
    return {
      posts: await getPosts()
    }
  }
}
</script>
<style lang="scss" scoped>
.main-banner {
  background-image: url('https://devmeetings.org/wp-content/uploads/2020/02/MG_8649.jpg');
}
</style>
