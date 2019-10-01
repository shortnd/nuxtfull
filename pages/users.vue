<template>
  <Layout>
    <h2>All Users</h2>
    <ul v-if="users.length">
      <li v-for="({ id, name }) in users" :key="id">
        {{ name }}
      </li>
    </ul>
    <h2 v-else>
      No Users
    </h2>
  </Layout>
</template>

<script>
import Layout from '~/components/Layout'
export default {
  components: {
    Layout
  },
  data () {
    return {
      users: []
    }
  },
  async asyncData ({ $axios, params }) {
    const { data } = await $axios.get(`/api/users`)
    return { users: data }
  }
}
</script>

<style>
</style>
