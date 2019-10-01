<template>
  <Layout>
    <h2 class="text-4xl font-semibold">
      All Posts
    </h2>
    <div>
      <nuxt-link class="underline text-blue-600" to="/posts/create">
        Add Post
      </nuxt-link>
    </div>
    <div v-if="posts">
      <ul>
        <li v-for="post in posts" :key="post._id">
          <nuxt-link :to="`/posts/${post._id}`">
            {{ post.title }}
          </nuxt-link>
        </li>
      </ul>
    </div>
    <div v-else>
      <h3 class="text-xl mb-3">
        No Posts
      </h3>
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
    posts () {
      return this.$store.state.posts.items
    }
  },
  fetch ({ store, params, $axios }) {
    return $axios.get('/api/posts').then((res) => {
      store.commit('posts/setPosts', res.data)
    })
  }
}
</script>
