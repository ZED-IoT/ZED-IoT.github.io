<template>
  <v-main>
    <div class="about">
      <h1>{{ blog }}</h1>
    </div>
  </v-main>
</template>

<script>
  export default {
    name: 'Blog',
    methods: {
      getTranslationObject () {
        const key = this.$route.params.blog
        const translation = this.$t(`blog:${key}`, { returnObjects: true })
        return translation !== key ? translation : []
      }
    },
    computed: {
      blog () {
        return this.getTranslationObject()
      }
    }
  }
</script>
