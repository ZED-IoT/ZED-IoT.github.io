<template>
  <v-main>
    <section>
      <div class="py-12" />
      <v-container class="text-center">
        <v-row class="justify-center">
          <v-col
            cols="10"
            md="5"
            sm="10"
            class="d-flex"
            align-self="stretch"
            style="flex-direction:column"
          >
            <v-spacer class="flex-grow-1" />

            <h2 class="text-left display-1 font-weight-bold mb-5">
              GNSS solution for nano satellite applications
            </h2>

            <body class="text-left flex-grow-1 mb-5">
              This flight proven Satellite Positioning System supports both GPS and GLONASS using the L1 band. With a cold start TTFF of just 30 seconds and a hot start of 1 second this module has a maximum power consumption of only 300 mW.
            </body>

            <v-btn
              justify="space-around"
              color="primary"
              elevation="1"
              large
              width="300"
              :href="`mailto:${email}?subject=GPS%20Module%20Quotation&body=Dear%20ZED,%0A%0AI%20would%20like%20to%20receive%20a%20quotation%20for%20the%20satellite%20GPS%20module.`"
            >
              Request quotation now!
            </v-btn>

            <v-spacer class="flex-grow-1" />
          </v-col>
          <v-col
            cols="10"
            md="5"
            sm="10"
          >
            <v-img
              max-width="650"
              src="../assets/gps_module.png"
            ></v-img>
          </v-col>
        </v-row>
      </v-container>
      <div class="py-12" />
    </section>
  </v-main>
</template>

<script>
// import VueMarkdown from '@adapttive/vue-markdown'

export default {
  name: 'Product',
  components: {
    // VueMarkdown
  },
  methods: {
    getTranslationObject () {
      const key = this.$route.params.blog
      const translation = this.$t(`blog:${key}`, { returnObjects: true })
      return translation !== key ? translation : ""
    }
  },
  computed: {
    email () {
      return this.$t('email')
    },
  }
}
</script>