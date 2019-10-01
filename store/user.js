export const state = () => ({
  isLoggedIn: false
})

export const mutations = {
  login (state) {
    state.isLoggedIn = true
  },
  logout (state) {
    state.isLoggedIn = false
  }
}

export const actions = {
  nuxtServerInit ({ commit }) {
    commit('logout')
  }
}
