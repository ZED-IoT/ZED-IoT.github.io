<template>
  <v-main>
    <section>
      <div class="py-12" />
      <v-container class="text-center">
        <v-row class="justify-center flex-wrap-reverse">
          <v-col
            cols="10"
            lg="5"
            md="10"
            sm="10"
            class="d-flex"
            align-self="stretch"
            style="flex-direction:column"
          >
            <v-spacer class="flex-grow-1" />

            <h2 class="text-left display-1 font-weight-bold mb-6">
              GNSS solution for nano satellite applications
            </h2>

            <body class="text-justify mb-12">
              This flight proven Satellite Positioning System supports both GPS and GLONASS using the L1 band. With a cold start TTFF of just 30 seconds and a hot start of 1 second this module has a maximum power consumption of only 300 mW.
            </body>

            <v-btn
              justify="space-around"
              color="primary"
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
            lg="5"
            md="10"
            sm="10"
          >
            <v-img
              src="../assets/gps_module.png"
            />
          </v-col>
        </v-row>
      </v-container>

      <div class="py-5" />

      <v-container class="text-center">
        <h2 class="display-1 font-weight-bold mb-3">
          Specifications
        </h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1" />
          <v-divider />
        </v-responsive>

        <v-row class="justify-center">
          <v-col
            cols="10"
            lg="5"
            md="10"
            sm="10"
          >
            <v-img
              src="../assets/gps_module.png"
            />
          </v-col>
          <v-col
            cols="10"
            lg="5"
            md="10"
            sm="10"
            class="d-flex"
            align-self="stretch"
            style="flex-direction:column"
          >
            <v-spacer class="flex-grow-1" />

            <v-row
              v-for="(specification, i) in specifications"
              :key="i"
              align="center"
              class="ma-2 flex-nowrap"
            >
              <v-avatar
                class="mr-5"
                color="primary"
                size="10"
              />
              <div class="text-left text-wrap" v-text="specification" />
            </v-row>

            <v-spacer class="flex-grow-1" />

          </v-col>
        </v-row>
        <div class="py-5" />
      </v-container>
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
    }
  },
  data: () => ({
    specifications: [
      'Supports both GPS and GLONASS using L1 band',
      '30 second cold start TTFF',
      '1 second hot start',
      '10m accuracy for position (3σ) and 0.9m/s for velocity (3σ)',
      '1Hz measurement update rate (Configurable up to 20Hz)',
      'Supports both active and passive antennas',
      'Maximum power consumption of 300mW',
      'Supports antenna with SMA or U.FL connector',
      'Micro D Sub male connector for I/O',
      'Communication using the I2C protocol',
      '70mm x 50mm form factor',
    ],
  }),
}
</script>