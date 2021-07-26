<template>
  <v-main>
    <section>
      <v-container>
        <v-row justify="center">
          <v-col md="6">
            <vue-markdown :source="blog" />
          </v-col>
        </v-row>
      </v-container>
    </section>
  </v-main>
</template>

<script>
  import VueMarkdown from '@adapttive/vue-markdown'

  export default {
    name: 'Blog',
    components: {
      VueMarkdown
    },
    methods: {
      getTranslationObject () {
        const key = this.$route.params.blog
        const translation = this.$t(`blog:${key}`, { returnObjects: true })
        return translation !== key ? translation : ""
      }
    },
    computed: {
      blog () {
        return this.getTranslationObject()
      }
    }
  }
</script>
