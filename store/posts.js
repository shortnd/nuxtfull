export const state = () => ({
  items: [],
  post: {}
})

export const mutations = {
  setPosts (state, data) {
    state.items = data
  },
  setPost (state, data) {
    state.post = data
  }
}
