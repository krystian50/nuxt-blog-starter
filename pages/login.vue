<template>
  <div class="container">
    {{ $fireAuth.GoogleAuthProvider }}
    <b-button @click="login()">With google</b-button>
    <b-button @click="$auth.loginWith('github')">With github</b-button>
  </div>
</template>
<script>
import firebase from 'firebase/app'
import 'firebase/auth'

export default {
  // issue: https://github.com/nuxt-community/firebase-module/issues/54
  data: () => ({
    firebase
  }),

  mounted() {
    this.$fireAuth.getRedirectResult().then((credential) => {
      this.updateUserData(credential.user)
    })
  },

  methods: {
    updateUserData(user) {
      console.log('defwgrt')

      if (!user) {
        return
      }

      const userRef = this.$fireStore.doc(`users/${user.uid}`)

      const data = {
        uid: user.uid,
        email: user.email,
        roles: {
          subscriber: true
        }
      }

      console.log(data)

      return userRef.set(data, { merge: true })
    },

    login() {
      const provider = new this.$fireAuthObj.GoogleAuthProvider()

      this.$fireAuth.signInWithRedirect(provider)
    }
  },

  beforeRouteEnter(to, from, next) {
    next((vm) => {
      if (vm.$store.getters.isLoggedIn) {
        vm.$router.push('/')
      }
    })
  }
}
</script>
