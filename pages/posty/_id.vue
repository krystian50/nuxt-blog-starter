/* eslint-disable vue/no-v-html */
<template>
  <div>
    <div class="container is-widescreen">
      <div class="notification">
        <RichText :content="post.content" />
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <!-- <nuxt-link :to="post._links.prev.href" class="is-size-4">
          <b-icon icon="chevron-left" type="is-secondary" />
          <span>{{ post._links.prev.name }}</span>
        </nuxt-link>
      </div>
      <div class="column is-6 has-text-right">
        <nuxt-link :to="post._links.next.href" class="is-size-4">
          <span>{{ post._links.next.name }}</span>
          <b-icon icon="chevron-right" type="is-secondary" />
        </nuxt-link> -->
      </div>
    </div>
  </div>
</template>
<script>
import RichText from '~/components/RichText'

export default {
  components: {
    RichText
  },

  async asyncData({ app, route }) {
    const postsRef = app.$fireStore
      .collection('posts')
      .where('slug', '==', route.params.id)
      .get()

    return {
      post: (await postsRef).docs.map((doc) => doc.data()).pop()
    }
  }
}
</script>
