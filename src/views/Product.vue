<template>
  <v-main>
    <section v-show="jsonisloaded">
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

            <h2
              class="text-left display-1 font-weight-bold mb-6"
              v-text="product_title"
            />

            <body
              class="text-justify mb-12"
              v-text="product_text"
            />

            <v-btn
              justify="space-around"
              color="primary"
              large
              width="300"
              :href="`mailto:${email}?${product_email_msg}`"
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
              :src="product_image1"
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
              :src="product_image2"
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
              v-for="(specification, i) in product_specifications"
              :key="i"
              align="center"
              class="ma-2 flex-nowrap"
            >
              <v-avatar
                class="mr-5"
                color="primary"
                size="10"
              />
              <div
                class="text-left text-wrap"
                v-text="specification"
              />
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

export default {
  name: 'Product',
  methods: {
    getTranslationObject (key) {
      const product_key = this.$route.params.product
      const object = this.$t(`products:${product_key}.${key}`, { returnObjects: true })
      if(object !== (product_key + '.' + key)){
        this.jsonisloaded = true
        return object
      }else{
        return ""
      }
    },
  },
  computed: {
    email () {
      return this.$t('email')
    },
    product_title () {
      return this.getTranslationObject('product-title');
    },
    product_text () {
      return this.getTranslationObject('product-text');
    },
    product_email_msg () {
      return this.getTranslationObject('product-email-msg');
    },
    product_image1 () {
      return this.getTranslationObject('product-image1');
    },
    product_image2 () {
      return this.getTranslationObject('product-image2');
    },
    product_specifications () {
      return this.getTranslationObject('specifications');
    }
  },
  data(){
    return {
      jsonisloaded: false
    }
  }
}
</script>