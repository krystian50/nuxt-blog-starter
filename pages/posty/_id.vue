/* eslint-disable vue/no-v-html */
<template>
  <div>
    <div class="container is-widescreen">
      <div class="notification">
        <Markdown :markdown="post.markdown" />
      </div>
    </div>

    <div class="columns">
      <div class="column is-6">
        <nuxt-link :to="post._links.prev.href" class="is-size-4">
          <b-icon icon="chevron-left" type="is-secondary" />
          <span>{{ post._links.prev.name }}</span>
        </nuxt-link>
      </div>
      <div class="column is-6 has-text-right">
        <nuxt-link :to="post._links.next.href" class="is-size-4">
          <span>{{ post._links.next.name }}</span>
          <b-icon icon="chevron-right" type="is-secondary" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>
<script>
import Markdown from '~/components/Markdown'

import markdownTest from '~/assets/markdowntest'

const getPost = () => {
  return Promise.resolve({
    id: `post1`,
    lug: `kurs-nuxtjs-czesc-2`,
    desc: 'W tej części będziemy mówić o lorem ipsum dolor amit',
    markdown: markdownTest,
    img: 'https://nuxtjs.org/logos/nuxt-icon-white.png',
    name: `Kurs NuxtJS - część 2`,
    author: 'kfras',
    _links: {
      prev: {
        href: `kurs-nuxtjs-czesc-1`,
        name: 'Kurs NuxtJS - część 1'
      },
      next: {
        href: `kurs-nuxtjs-czesc-3`,
        name: 'Kurs NuxtJS - część 3'
      }
    }
  })
}

export default {
  components: {
    Markdown
  },
  async asyncData() {
    return {
      post: await getPost()
    }
  }
}
</script>
