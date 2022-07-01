<template>
  <v-main>
    <section>
      <v-container>
        <v-row justify="center">
          <v-col
            cols="12"
            xl="6"
            lg="8"
            md="8"
            sm="10"
            xs="12"
          >
            <vue-markdown :source="blog"/>
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
    getTranslationObject() {
      const blog_key = this.$route.params.blog
      const object = this.$t(`blog:${blog_key}`, {returnObjects: true})
      return object !== blog_key ? object : ""
    }
  },
  computed: {
    blog() {
      return this.getTranslationObject()
    }
  }
}
</script>
