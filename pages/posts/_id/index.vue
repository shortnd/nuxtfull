<template>
  <Layout class="container mx-auto px-3">
    <div v-if="post">
      <h2>{{ post.title }}</h2>
      <nuxt-link :to="`/posts/${post._id}/edit`">
        Edit
      </nuxt-link> |
      <button @click="deletePost(post)">
        Delete
      </button>
    </div>
  </Layout>
</template>

<script>
import Layout from '@/components/Layout'
export default {
  components: {
    Layout
  },
  computed: {
    post () {
      return this.$store.state.posts.post
    }
  },
  fetch ({ store, params, $axios }) {
    const { id } = params
    $axios.get(`/api/posts/${id}`).then((res) => {
      store.commit('posts/setPost', res.data)
    })
  },
  methods: {
    async deletePost (post) {
      await this.$axios.delete(`/api/posts/${post._id}`).then((res) => {
        alert(`Post ${post._id} was deleted`)
        this.$router.push('/posts')
      }).catch(({ error }) => {
        console.log(error)
      })
    }
  }
}
</script>
