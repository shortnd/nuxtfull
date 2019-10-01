<template>
  <div class="container mx-auto px-3">
    <h2 class="mb-3 text-2xl font-sans font-bold">
      Create Post
    </h2>
    <form method="POST" @submit.prevent="addPost">
      <div class="mb-2">
        <label class="block mb-1" for="title">Title:</label>
        <input
          id="title"
          v-model="post.title"
          class="shadow rounded-sm p-3 placeholder-gray-500 w-full"
          type="text"
          name="title"
          placeholder="Title"
        >
      </div>
      <div class="mb-2">
        <label for="body" class="block mb-1">Body:</label>
        <textarea v-model="post.body" class="w-full shadow rounded-sm h-32 resize-none p-3" placeholder="Body" />
      </div>
      <div class="mb-2">
        <button type="submit" class="bg-blue-600 text-white px-3 py-2 rounded">
          Add Post
        </button>
        <button type="reset" class="bg-red-600 text-white px-3 py-2 rounded">
          Clear
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    async addPost () {
      await this.$axios.post('/api/posts', this.post)
        .then(({ data }) => {
          console.log(data)
          this.$router.push('/posts')
        })
        .catch(({ errors }) => console.log(errors))
    }
  }
}
</script>
