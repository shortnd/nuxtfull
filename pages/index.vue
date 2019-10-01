<template>
  <Layout>
    <div>
      <logo />
      <h1 class="title">
        nuxtfull
      </h1>
      <h2 class="subtitle">
        My bedazzling Nuxt.js project
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
  </Layout>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Layout from '~/components/Layout'

export default {
  components: {
    Logo,
    Layout
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/

</style>
