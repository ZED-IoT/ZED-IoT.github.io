<template>
  <div>
    <v-parallax
        class="fill-height block"
        :src="require('../assets/ZED_FYI_Price.jpg')"
    >
      <div class="mx-auto">
        <h1 class="text-h1 text-center">
          Are you ready to be amaZED?
        </h1>
        <v-row>
          <v-col></v-col>
          <v-col cols="8">
            <p class="text-center pa-12">
              We want to empower companies to adopt this cleaner and cheaper alternative to batteries and integrate our
              new
              solutions into their already existing IoT infrastructure. The world is going through a digital smart
              transformation, the least we can do is make sure it's green and sustainable.
            </p>
          </v-col>
          <v-col></v-col>
        </v-row>
      </div>
    </v-parallax>
    <div class="fill-height">
      <v-row no-gutters align="center" justify="center">
        <v-col cols="6">
          <v-card flat rounded="0" class="pa-12">
            <v-img :src="require('../assets/ZED_Hexagons_1.png')" contain height="500"></v-img>
          </v-card>
        </v-col>
        <v-col cols="6">
          <v-card flat rounded="0" class="pa-12 my-16">
            <v-card-title>Our applications</v-card-title>
            <v-card-text class="justify-center align-center">
              We have identified 6 major sectors where extreme IoT energy harvesting solutions can provide a good
              product-market fit. The goal of the company is to have a versatile and diverse portfolio and not be fixed
              on one single use case or problem. These sectors are based on past experiments and results where ZED sees
              potential to provide a sustainable solution.
              The potential use cases where batteryless systems can contribute are in flood detection, large scale
              predictive maintenance, inventory management, precision agriculture, weather monitoring systems and smart
              transportation. These sectors are subject to client’s own IoT infrastructure requirements and problems.
              The beachhead market selected is smart transportation where ZED is currently working with the first
              client.
              The plan is to further develop base prototypes for these use cases which enables them to utilize networks
              of batteryless devices while also investigating potential bottlenecks to their deployment. By developing
              different aspects of the system, ZED can be better prepared to customize and further innovate based on the
              customer’s needs. The final system development will unequivocally be driven by market forces and client
              pain points.
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </div>
    <div class="block primary"></div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style lang="scss" scoped>
.block {
  height: calc(100vh - 64px) !important;

  &.primary {
    background-color: var(--v-primary-base);
  }
}
</style>
