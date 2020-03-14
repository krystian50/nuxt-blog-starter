<template>
  <article class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.img" :alt="`Zdjęcie ${post.name}`" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <nuxt-link class="title is-4 is-block" :to="`posty/post.slug`">{{
            post.name
          }}</nuxt-link>
          <p class="subtitle is-6">@{{ post.author }}</p>
        </div>
      </div>

      <div class="content">
        {{ post.desc }}
        <br />
        <time :datetime="post.uploadAt">{{ post.uploadAt }}</time>
      </div>
    </div>
  </article>
</template>
<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
}
</script>
