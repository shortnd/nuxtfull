<template>
  <div class="container mx-auto px-3">
    <h2>Edit {{ post.title }}</h2>
    <form method="POST" @submit.prevent="updatePost">
      <div>
        <label for="title">Title:</label>
        <input id="title" v-model="post.title" type="text" required>
      </div>
      <div>
        <label for="body">Body</label>
        <textarea id="body" v-model="post.body" required />
      </div>
      <div>
        <button type="submit">
          Update {{ post.title }}
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: null
    }
  },
  async asyncData ({ params, $axios }) {
    const { id } = params
    const { data } = await $axios.get(`/api/posts/${id}`)
    return { post: data }
  },
  methods: {
    updatePost () {
      this.$axios.put(`/api/posts/${this.post._id}`, this.post)
        .then((res) => {
          this.$router.push(`/posts/${this.post._id}`)
        })
    }
  }
}
</script>
