<template>
  <div class="component" id="sponsors">


    <StraightBanner top-image="/images/section-heading--sponsors.svg"/>

    <div class="container pb-12">
      <div class="md:flex flex-0 mb-5 justify-around items-center" v-for="sponsors in _groupBy(data, 'row')">
        <div class="sponsor px-5 " v-for="sponsor in sponsors">
          <nuxt-link :href="sponsor._path" class="h-5">
            <nuxt-img loading="lazy" :src="'/images/sponsors/' + sponsor.img" class="sponsor-img m-auto"
                      :alt="sponsor.title"/>
            <p class="w-full text-center font-thin text-xs"><span>{{ sponsor.caption }}</span></p>
          </nuxt-link>
        </div>
      </div>
    </div>

    <div class="container py-36" id="partners">
      <h3 class="uppercase text-sm mb-5">/partners</h3>
      <div class="grid md:grid-cols-2 gap-4">
        <div v-for="partner in partners" @mouseover="mouseover"
             @mouseleave="mouseleave" :data-image="partner.img">
          <nuxt-link :to="partner.url" target="_blank" :data-image="partner.img">
            <div class="flex justify-between hover:text-adoptingYellow border-b" :data-image="partner.img">
              {{ partner.title }}
              <nuxt-img src="/images/arrow-top-right.svg" :data-image="partner.img"/>
              <nuxt-img :src="'/images/partners/' + partner.img" :data-image="partner.img"
                        class="hidden"/>
            </div>
          </nuxt-link>

        </div>
      </div>
    </div>

    <MouseFollowImage v-bind:visible="showHoverImage" v-bind:img="hoverImage"/>

  </div>
</template>

<style scoped>
.component {
  background-color: #252525;
  @apply py-0;
}

.sponsor-img {
  width: 250px;
  max-height: 250px;
}

</style>


<script setup>
import _groupBy from "lodash/groupBy";
import "~/components/index_page/sponsors.vue";

const data = await useAsyncData('sponsors' + process.env.CACHE_KEY, () => queryContent('/sponsors').find()).data
const partners = await useAsyncData('partners' + process.env.CACHE_KEY, () => queryContent('/partners').find()).data
</script>

<script>
export default {

  data() {
    return {
      showHoverImage: false,
      hoverImage: ""
    }
  },
  methods: {
    mouseleave: function () {
      this.showHoverImage = false
      this.hoverImage = null
    },
    mouseover: function (event) {
      let img = event.target.getAttribute('data-image')
      this.showHoverImage = true
      if (img && '/images/partners/' + img !== this.hoverImage) {
        this.hoverImage = '/images/partners/' + img
      }
    }
  }
}
</script>