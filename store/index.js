export const mutations = {
  ON_AUTH_STATE_CHANGED_MUTATION(state, { authUser } = {}) {
    console.log('mut', authUser)

    if (authUser) {
      state.user = {
        name: authUser.displayName,
        email: authUser.email,
        uid: authUser.uid
      }
    } else {
      state.user = null
    }
  }
}

export const state = () => ({
  user: null
})

export const getters = {
  isLoggedIn: (state) => !!state.user
}

export const actions = {
  nuxtServerInit({ dispatch, commit }, { res }) {
    if (res && res.locals && res.locals.user) {
      const { allClaims: claims, ...authUser } = res.locals.user

      commit('ON_AUTH_STATE_CHANGED_MUTATION', { authUser, claims })
    }
  }
}
