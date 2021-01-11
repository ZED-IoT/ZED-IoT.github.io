<template>
  <v-app>

    <v-navigation-drawer app v-if="$vuetify.breakpoint.smAndDown" v-model="drawer">
      <v-list nav>
        <v-list-item-group
            active-class="primary--text text--accent-4"
        >
          <v-list-item v-for="({text, link}, i) in menu" :key="i" :href="link" @click.stop="drawer = !drawer">
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
      <v-app-bar-nav-icon v-if="$vuetify.breakpoint.smAndDown" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-img
          contain
          :class="{ 'center-image': $vuetify.breakpoint.smAndDown }"
          max-height="70%"
          max-width="200"
          :src="require('./assets/ZED_Logo_02.png')"
          style="cursor: pointer"
          onclick="window.scrollTo({  top: 0,  left: 0 });"
      ></v-img>
      <v-spacer></v-spacer>
      <div v-if="$vuetify.breakpoint.mdAndUp" >
        <v-btn text v-for="({text, link}, i) in menu" :key="i" :href="link">
          {{ text }}
        </v-btn>
      </div>
    </v-app-bar>

    <v-main>
      <section id="hero">
        <v-row no-gutters>
          <v-img
              :height="'calc(100vh - ' + $vuetify.application.top + 'px)'"
              :src="require('./assets/ZED_FYI_Price.jpg')"
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
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">About us</h2>

          <v-responsive
              class="mx-auto mb-8"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
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
            ZED specializes in customizing solutions based on the clients needs and aids in a seamless integration into existing systems.
            <br>
            <br>
            By harvesting the ambient energy from its surroundings ZED’s solutions don't require batteries,
            greatly reducing both the material and maintenance costs. This reduction in costs enables new large scale applications not seen before.
          </v-responsive>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="switch">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            :src="require('./assets/ZED_Switch.png')"
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
                  ></div>

                  <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                  ></div>
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
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3">Features</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>
            <v-divider></v-divider>
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
                      ></v-img>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="title"
                ></v-card-title>

                <v-card-text
                    class="subtitle-1"
                    v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="stats">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            :src="require('./assets/ZED_Switch_2.png')"
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
                  ></div>

                  <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                  ></div>
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
        <div class="py-12"></div>

        <v-container class="text-center">
          <h2 class="display-2 font-weight-bold mb-3 white--text">The team</h2>
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
            <v-divider class="mb-1" style="border-color: white"></v-divider>
            <v-divider style="border-color: white"></v-divider>
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
                      ></v-img>
                    </v-avatar>
                  </div>
                </v-theme-provider>

                <v-card-title
                    class="justify-center font-weight-black text-uppercase"
                    v-text="name"
                ></v-card-title>

                <v-card-text
                    class="subtitle-1"
                    v-text="text"
                >
                </v-card-text>
              </v-card>
            </v-col>
          </v-row>
        </v-container>

        <div class="py-12"></div>
      </section>

      <section id="lab">
        <v-parallax
            :height="$vuetify.breakpoint.smAndDown ? 700 : 500"
            :src="require('./assets/ZED_LAB.png')"
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
                  ></div>

                  <div
                      class="title font-weight-regular text-uppercase"
                      v-text="title"
                  ></div>
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-parallax>
      </section>

      <section id="news">
        <div class="py-12"></div>

        <v-container>
          <h2 class="display-2 font-weight-bold mb-3 text-uppercase text-center">News</h2>

          <v-responsive
              class="mx-auto mb-12"
              width="56"
          >
            <v-divider class="mb-1"></v-divider>

            <v-divider></v-divider>
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
              ></v-img>

              <h3
                  class="font-weight-black mb-4 text-uppercase"
                  v-text="title"
              ></h3>

              <div
                  class="title font-weight-light mb-5"
                  v-text="text"
              ></div>

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

        <div class="py-12"></div>
      </section>

      <v-sheet
          id="contact"
          color="#333333"
          dark
          tag="section"
          tile
      >
        <div class="py-12"></div>

        <v-container>

          <h2 class=" font-weight-bold mb-3 text-uppercase text-center">
            Contact Us
          </h2>
          <p class="text-center">
            Email: <a style="color: white" :href="`mailto:${email}`">{{ email }}</a>
          </p>
        </v-container>

        <div class="py-12"></div>
      </v-sheet>
    </v-main>

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
      setFavicon(darkMode = false) {
        const favicon = darkMode ? 'favicon_white.ico' : 'favicon_black.ico'
        document.getElementById('favicon').setAttribute('href', favicon)
      }
    },
    data () {
      return {
        drawer: false,
        email: 'info@ZED-IoT.nl',
        menu: [
          { text: 'About us', link: '#about-us' },
          { text: 'Features', link: '#features' },
          { text: 'The team', link: '#team' },
          { text: 'News', link: '#news' }
        ],
        articles: [
          {
            src: require('./assets/ZED_FYI_Team.jpg'),
            title: 'Winning the Airbus FYI competition',
            text: 'Under the name of Zero Heroes, ZED has won the prestigious Airbus Fly Your Ideas price. From 300 steams ZED convinced the jury with their energy harvesting solutions inside aircrafts.',
            link: 'https://www.airbus.com/newsroom/press-releases/en/2019/06/pioneering-student-team-from-the-netherlands-wins-airbus-fly-your-ideas-2019-global-competition.html'
          },
          {
            src: require('./assets/ZED_Impact_competition.png'),
            title: 'Winning the 4TU Impact challenge',
            text: 'After wining the TU-Delft impact competition, ZED wins the national 4TU Impact challenge. Winning tickets to the World Expo in Dubai, where ZED will join the Dutch trade delegation representing the Netherlands.',
            link: 'https://4tuimpactchallenge.nl/news/384'
          },
          {
            src: require('./assets/ZED_Delta_Team.jpg'),
            title: 'Delta, TuDelft article',
            text: 'Read why smart electronics are becoming battery free.',
            link: 'https://www.delta.tudelft.nl/article/why-smart-electronics-are-becoming-battery-free'
          }
        ],
        features: [
          {
            image: require('./assets/ZED_icon_White_Maintenance.png'),
            title: 'Large scale Predictive Maintenance',
            text: 'Masses of sensors spread across large areas detecting abnormalities reducing down time of systems,' +
                'only becomes feasible with low cost and low maintenance i.e. batteryless and wireless sensors.'
          },
          {
            image: require('./assets/ZED_icon_White_Transportation.png'),
            title: 'Smart Transportation',
            text: 'Scalable energy harvesting sensors offer a cheap time-efficient way of controlling logistics.' +
                'By for example measuring the seat occupancy, or detecting whether freight is correctly secured.'
          },
          {
            image: require('./assets/ZED_icon_White_Inventory.png'),
            title: 'Inventory Management',
            text: 'Zero energy devices are able to detect the volumes of inventory that is held at the warehouses.' +
                'The batteryless sensors measure when inventory is low and wirelessly transmitted to a management system.'
          },
          {
            image: require('./assets/ZED_icon_White_Detection.png'),
            title: 'Flood Detection',
            text: 'By applying large numbers of zero energy devices into dikes, they can warn when the tides become too high.' +
                'Without the need for wires which must be dug into the ground weakening the dikes.'
          },
          {
            image: require('./assets/ZED_icon_White_Agriculture.png'),
            title: 'Precision Agriculture',
            text: 'Agriculture is becoming high tech, helping optimising yields.' +
                'With the limitation of not being able to put wires into the ground,' +
                'ZED’s wireless and batteryless device can be used to measure crop,' +
                'soil and air quality throughout large fields.'
          },
          {
            image: require('./assets/ZED_icon_White_weatherstations.png'),
            title: 'Perpetual Weather Stations',
            text: 'With self powered weather stations from ZED throughout the city,' +
                'the much needed fine-grained data can be collected, improving weather predictions. '
          }
        ],
        team: [
          {
            image: require('./assets/VP.jpg'),
            name: 'Dr. R.R. Venkatesha Prasad',
            text: 'Known fondly in the team as VP, Dr. Prasad is an associate professor at the Embedded and Networked Systems Group at TU, Delft. He spends three quarters of his time teaching and researching at the university and the other quarter working for ZED using his experience and network within the industry. He possesses 6 years of startup experience. In his startup venture, Esqube Communication Solutions, he developed an integrated VoIP--Telephony--web application suite. One real-time application he developed, to bridge VoIP calls anonymously, called Click-to-Talk, was appreciated by Ebay.com. The startup filed for eight patent applications and three PCT applications and was selected as top 100 IT innovators in India (NASSCOM 2006) and top 100 promising companies in Asia (RedHerring 2008). VP has more than 20 years of network, wireless, and IoT research expertise having mentored many PhDs and master students thus far. A never ending pool of ideas and enthusiasm, VP ensures that ZED never misses an opportunity either technical or financial.'
          },
          {
            image: require('./assets/Niels.jpg'),
            name: 'Ir. N.H. Hokke',
            text: 'Niels, a recent graduate supervised by VP, worked on the topic of batteryless wireless communication in his masters at TU Delft. Instead of starting as a PhD and adding more research papers into an already full archive, Niels instead believes in transforming state of the art research into real life tangible products for the benefit of society. As CEO, Niels is fully focusing all of his time on building up ZED as a vehicle which can move our innovation from the labs of the university onto the industrial factory floor where it can truly make a difference saving time and money for our clients.'
          },
          {
            image: require('./assets/Suryansh.jpg'),
            name: 'Ir. S. Sharma',
            text: 'Suryansh, who also recently graduated under VP on the topic of batteryless wireless sensing, is currently pursuing a PhD at TU Delft on AIoT where he combines the power of AI and IoT systems to extreme applications. Suryansh kickstarted ZED’s journey at the Impact Challenge, granting the team a platform for experiencing entrepreneurship and gaining much needed structure and direction. Passionate for Innovation, He believes in the power of ideas and wants to transform research papers into tangible technology which can benefit the society at large.'
          },
          {
            image: require('./assets/Sujay.jpg'),
            name: 'Dr. S. Narayana',
            text: 'Sujay, is currently working as a postdoc with VP at TU Delft. Having finished his Phd in resource constrained space IoT devices, Sujay is an expert in coordinating operations and guiding technical development within the team. Extremely methodical and scientifically sound, he brings a wide range of industrial engineering as well as research experience to ZED. With him on board, we look at “space” as another frontier for us to conquer.'
          },
          {
            image: require('./assets/Josine.jpg'),
            name: 'J. I. van der Velde',
            text: 'Business associate Josine is a student at NHL-Stenden studying International Business and Management Studies. She is doing her internship full-time at ZED and helps refine the business structure of ZED. Instrumental in developing a marketing strategy and reaching out to potential clients, Josine is always up for new challenges. While working she likes to keep control over the overall scope while ensuring a fun motivated atmosphere within the team.'
          }
        ],
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
