<template>
  <div>
    <hero />
    <intro />
    <location_carousel />
    <location />
    <schedule />
    <img src="~/assets/img/speakers-img.png" alt="" class="w-full h-auto">
    <speakers />
    <sponsors_call />
    <tickets />
      <sponsors />
    <people />
  </div>
</template>

<script>

import Location_carousel from "../components/index_page/location_carousel";
import Location from "../components/index_page/location";
import Hero from "../components/index_page/hero";
import Intro from "../components/index_page/intro";
import Schedule from "../components/index_page/schedule";
import Speakers from "../components/index_page/speakers";
import Sponsors_call from "../components/index_page/sponsors_call";
import Tickets from "../components/index_page/tickets";
import Sponsors from "~/components/index_page/sponsors.vue";
import People from "~/components/index_page/people.vue";
export default {
  components: {
      People,
      Sponsors, Tickets, Sponsors_call, Speakers, Schedule, Intro, Hero, Location, Location_carousel}
}

</script>

<style>
</style>