<template>
  <header class="bg-gray-800">
    <nav class="container mx-auto text-white px-3">
      <nuxt-link to="/">
        Home
      </nuxt-link>
      <nuxt-link to="/users">
        Users
      </nuxt-link>
      <nuxt-link to="/posts">
        Posts
      </nuxt-link>
    </nav>
    <div v-if="user" class="text-white">
      Logged in
      <button @click="logout">
        Logout
      </button>
    </div>
    <div v-else class="text-white">
      Logged out
      <button @click="login">
        Login
      </button>
    </div>
  </header>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'Header',
  computed: {
    user () {
      return this.$store.state.user.isLoggedIn
    }
  },
  methods: {
    ...mapMutations({
      login: 'user/login',
      logout: 'user/logout'
    })
  }
}
</script>
