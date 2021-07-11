<template>
  <v-main>
    <section id="hero">
      <v-row no-gutters>
        <v-img
          :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
          :src="require('./../assets/ZED_FYI_Price.jpg')"
        >
          <v-theme-provider dark>
            <v-container fill-height>
              <v-row
                align="center"
                class="white--text mx-auto"
                justify="center"
              >
                <v-col
                  class="white--text text-center"
                  cols="12"
                  tag="h1"
                >
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-1' : 'display-2']"
                    class="font-weight-light"
                  >
                    Are you ready to be
                  </span>
                  <br>
                  <span
                    :class="[$vuetify.breakpoint.smAndDown ? 'display-3': 'display-4']"
                    class="font-weight-black"
                  >
                    amaZED?
                  </span>
                </v-col>
                <v-btn
                  class="align-self-end"
                  fab
                  outlined
                  href="#about-us"
                >
                  <v-icon>mdi-chevron-double-down</v-icon>
                </v-btn>
              </v-row>
            </v-container>
          </v-theme-provider>
        </v-img>
      </v-row>
    </section>

    <section id="about-us">
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          About us
        </h2>

        <v-responsive
          class="mx-auto mb-8"
          width="56"
        >
          <v-divider class="mb-1" />

          <v-divider />
        </v-responsive>

        <v-responsive
          class="mx-auto title font-weight-light mb-8"
          max-width="720"
        >
          Zero Energy Development or ZED for short is a business to business IoT solution provider.
          With more than 30 years of combined research experience in Wireless and Batteryless technologies,
          ZED enables enterprises to harness the potential of the next generation of IoT applications.
          <br>
          <br>
          From large scale predictive maintenance to precision agriculture,
          or from perpetual weather stations to inventory management.
          ZED specializes in customizing solutions based on the clients needs and aids in a seamless integration into
          existing systems.
          <br>
          <br>
          By harvesting the ambient energy from its surroundings ZED’s solutions don't require batteries,
          greatly reducing both the material and maintenance costs. This reduction in costs enables new large scale
          applications not seen before.
        </v-responsive>
      </v-container>

      <div class="py-12" />
    </section>

    <section id="switch">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        :src="require('./../assets/ZED_Switch.png')"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                />

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section
      id="features"
      class="grey lighten-3"
    >
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3">
          Features
        </h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1" />
          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
            class="d-flex"
            align-self="stretch"
            v-for="({ image, title, text }, i) in features"
            :key="i"
            cols="12"
            md="6"
            sm="12"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    color="primary"
                    size="120"
                  >
                    <v-img
                      contain
                      style="border-radius: initial"
                      max-height="60"
                      :src="image"
                    />
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="title"
              />

              <v-card-text
                class="subtitle-1"
                v-text="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>

    <section id="stats">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        :src="require('./../assets/ZED_Switch_2.png')"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                />

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section
      id="team"
      class="primary"
    >
      <div class="py-12" />

      <v-container class="text-center">
        <h2 class="display-2 font-weight-bold mb-3 white--text">
          The team
        </h2>
        <v-responsive
          class="mx-auto title font-weight-light mb-8 white--text"
          max-width="720"
        >
          Our multinational multidisciplinary team comprises scientists, engineers and commercial experts who bring
          years of technical and commercial experience to the table. As shown in the figure above, we follow a
          horizontal organizational structure. The people who build ZED consist of:
        </v-responsive>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider
            class="mb-1"
            style="border-color: white"
          />
          <v-divider style="border-color: white" />
        </v-responsive>

        <v-row>
          <v-col
            class="d-flex"
            align-self="stretch"
            v-for="({ image, name, text }, i) in team"
            :key="i"
            cols="12"
            md="6"
            sm="12"
          >
            <v-card
              class="py-12 px-4"
              color="grey lighten-5"
              flat
            >
              <v-theme-provider dark>
                <div>
                  <v-avatar
                    size="250"
                  >
                    <v-img
                      contain
                      :src="image"
                    />
                  </v-avatar>
                </div>
              </v-theme-provider>

              <v-card-title
                class="justify-center font-weight-black text-uppercase"
                v-text="name"
              />

              <v-card-text
                class="subtitle-1"
                v-text="text"
              />
            </v-card>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>

    <section id="lab">
      <v-parallax
        :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
        :src="require('./../assets/ZED_LAB.png')"
      >
        <v-container fill-height>
          <v-row class="mx-auto">
            <v-col
              v-for="[value, title] of stats"
              :key="title"
              cols="12"
              md="3"
            >
              <div class="text-center">
                <div
                  class="display-3 font-weight-black mb-4"
                  v-text="value"
                />

                <div
                  class="title font-weight-regular text-uppercase"
                  v-text="title"
                />
              </div>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
    </section>

    <section id="news">
      <div class="py-12" />

      <v-container>
        <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">
          News
        </h2>

        <v-responsive
          class="mx-auto mb-12"
          width="56"
        >
          <v-divider class="mb-1" />

          <v-divider />
        </v-responsive>

        <v-row>
          <v-col
            v-for="({ src, text, title, link }, i) in articles"
            :key="i"
            cols="12"
            md="4"
          >
            <v-img
              :src="src"
              class="mb-4"
              height="275"
              max-width="100%"
            />

            <h3
              class="font-weight-black mb-4 text-uppercase"
              v-text="title"
            />

            <div
              class="title font-weight-light mb-5"
              v-text="text"
            />

            <v-btn
              class="ml-n4 font-weight-black"
              text
              :href="link"
            >
              Continue Reading
            </v-btn>
          </v-col>
        </v-row>
      </v-container>

      <div class="py-12" />
    </section>
  </v-main>
</template>

<script>
  import _ from 'lodash'

  export default {
    name: 'Home',
    components: {},
    methods: {
      getTranslationObject (key) {
        const translation = this.$t(key, { returnObjects: true })
        return translation !== key ? translation : []
      }
    },
    computed: {
      articles () {
        return _.merge(
          [
            {
              src: require('./../assets/ZED_FYI_Team.jpg'),
              link: 'https://www.airbus.com/newsroom/press-releases/en/2019/06/pioneering-student-team-from-the-netherlands-wins-airbus-fly-your-ideas-2019-global-competition.html'
            },
            {
              src: require('./../assets/ZED_Impact_competition.png'),
              link: 'https://4tuimpactchallenge.nl/news/384'
            },
            {
              src: require('./../assets/ZED_Delta_Team.jpg'),
              link: 'https://www.delta.tudelft.nl/article/why-smart-electronics-are-becoming-battery-free'
            }
          ],
          this.getTranslationObject('articles')
        )
      },
      features () {
        return _.merge(
          [
            { image: require('./../assets/ZED_icon_White_Maintenance.png') },
            { image: require('./../assets/ZED_icon_White_Transportation.png') },
            { image: require('./../assets/ZED_icon_White_Inventory.png') },
            { image: require('./../assets/ZED_icon_White_Detection.png') },
            { image: require('./../assets/ZED_icon_White_Agriculture.png') },
            { image: require('./../assets/ZED_icon_White_weatherstations.png') }
          ],
          this.getTranslationObject('features')
        )
      },
      team () {
        return _.merge(
          [
            { image: require('./../assets/John.jpg') },
            { image: require('./../assets/VP.jpg') },
            { image: require('./../assets/Niels.jpg') },
            { image: require('./../assets/Suryansh.jpg') },
            { image: require('./../assets/Sujay.jpg') },
            { image: require('./../assets/Josine.jpg') }
          ],
          this.getTranslationObject('team')
        )
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

</style>
