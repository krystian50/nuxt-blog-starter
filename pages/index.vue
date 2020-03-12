<template>
  <div>
    <div class="hero is-primary">
      <div class="hero-body">
        <div class="container has-text-centered">
          <h1 class="title">
            Witaj na blogu!
          </h1>
          <span class="subtitle">
            Dostępne artykuły poniżej
          </span>
        </div>
      </div>
    </div>

    <main class="section">
      <div class="tile is-ancestor">
        <div class="tile is-parent">
          <article class="tile is-child box">
            <!-- Add products here -->
          </article>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
// remove when will be used
// eslint-disable-next-line no-unused-vars
const getProducts = () => {
  return Promise.resolve([
    {
      id: 'post0',
      name: 'Kurs NuxtJS - część 1'
    },
    {
      id: 'post1',
      name: 'Kurs NuxtJS - część 2'
    },
    {
      id: 'post2',
      name: 'Kurs NuxtJS - część 3'
    },
    {
      id: 'post3',
      name: 'Kurs NuxtJS - część 4'
    }
  ])
}
export default {
  name: 'HomePage',
  asyncData() {
    return {}
  }
}
</script>
