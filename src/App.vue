<template>
  <v-app>
    <v-navigation-drawer
      app
      v-if="$vuetify.breakpoint.smAndDown"
      v-model="drawer"
    >
      <v-list nav>
        <v-list-item-group
          active-class="primary--text text--accent-4"
        >
          <v-list-item
            v-for="({text, link}, i) in menu"
            :key="i"
            :to="{ name: 'HomePage', hash: link }"
            @click.stop="drawer = !drawer"
          >
            <v-list-item-title>{{ text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="white"
      height="100"
      :hide-on-scroll="$vuetify.breakpoint.smAndDown"
    >
      <v-app-bar-nav-icon
        v-if="$vuetify.breakpoint.smAndDown"
        @click.stop="drawer = !drawer"
      />

      <v-img
        contain
        :class="{ 'center-image': $vuetify.breakpoint.smAndDown }"
        max-height="70%"
        max-width="200"
        :src="require('./assets/ZED_Logo_02.png')"
        style="cursor: pointer"
        @click="goHome"
      />
      <v-spacer />
      <div v-if="$vuetify.breakpoint.mdAndUp">
        <v-btn
          text
          v-for="({text, link}, i) in menu"
          :key="i"
          :to="{ name: 'HomePage', hash: link }"
        >
          {{ text }}
        </v-btn>
      </div>
    </v-app-bar>

    <router-view />

    <v-sheet
      id="contact"
      color="#333333"
      dark
      tag="section"
      tile
    >
      <div class="py-12" />

      <v-container>
        <h2 class=" font-weight-bold mb-3 text-uppercase text-center">
          Contact Us
        </h2>
        <p class="text-center">
          Email:
          <a
            style="color: white"
            :href="`mailto:${email}`"
          >{{ email }}</a>
        </p>
      </v-container>

      <div class="py-12" />
    </v-sheet>

    <v-footer
      class="justify-center"
      color="#292929"
      height="100"
    >
      <div class="title font-weight-light grey--text text--lighten-1 text-center">
        &copy; {{ (new Date()).getFullYear() }} — ZED
      </div>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    name: 'App',
    components: {},
    created () {
      this.setFavicon(
        window.matchMedia('(prefers-color-scheme: dark)').matches
      )
    },
    methods: {
      setFavicon (darkMode = false) {
        const favicon = darkMode ? 'favicon_white.ico' : 'favicon_black.ico'
        document.getElementById('favicon').setAttribute('href', favicon)
      },
      getTranslationObject (key) {
        const translation = this.$t(key, { returnObjects: true })
        return translation !== key ? translation : []
      },
      goHome () {
        this.$router.push({ name: 'HomePage' }).catch(() => {
          window.scrollTo({ top: 0, left: 0 })
        })
      }
    },
    computed: {
      email () {
        return this.$t('email')
      },
      menu () {
        return this.getTranslationObject('menu')
      }
    },
    data () {
      return {
        drawer: false,
        stats: []
      }
    }
  }
</script>

<style lang="scss">
  html {
    scroll-behavior: smooth;
  }

  @font-face {
    font-family: Oswald regular;
  }

  .center-image {
    width: calc(100vw - 96px) !important;
    max-width: calc(100vw - 96px) !important;
  }
</style>
