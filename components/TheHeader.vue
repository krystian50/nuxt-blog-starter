<template>
  <b-navbar type="is-primary" spaced>
    <template slot="brand">
      <b-navbar-item tag="nuxt-link" to="/" class="logo-link">
        <img :src="require('~/assets/logo.png')" alt="" class="logo" />
      </b-navbar-item>
    </template>
    <template slot="start">
      <b-navbar-item href="#">
        O nas
      </b-navbar-item>
      <b-navbar-item href="#">
        Kontakt
      </b-navbar-item>
    </template>

    <!-- <template slot="end">
      <b-navbar-item tag="div">
        <div class="buttons">
          <a class="button is-primary">
            <strong>Sign up</strong>
          </a>
          <a class="button is-light">
            Log in
          </a>
        </div>
      </b-navbar-item>
    </template> -->
  </b-navbar>
</template>
<style lang="scss" scoped>
.logo-link {
  padding: 5px;
  margin-right: 20px;
}

.logo {
  height: 40px;
  max-height: 100%;
}
</style>
