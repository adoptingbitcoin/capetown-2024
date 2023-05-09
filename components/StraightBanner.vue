<template>
  <div class="py-28 overflow-hidden">

      <div class="">

          <div class="relative" :class="ticketClass">
              <nuxt-img loading="lazy" :src="topImage" class="invisible" alt="" />
              <div class="w-[300%] absolute top-0 left-0 flex overflow-y-visible">
                  <nuxt-img loading="lazy" :src="topImage" class="" alt="" />
                  <nuxt-img loading="lazy" :src="topImage" class="" alt="" />
                  <nuxt-img loading="lazy" :src="topImage" class="" alt="" />
              </div>
          </div>

          <div class="relative" v-if="bottomImage" :class="ticketClass">
              <nuxt-img loading="lazy" :src="bottomImage" class="invisible" alt="" />
              <div class="w-[300%] absolute top-0 left-0 flex -ml-96 overflow-y-visible">
                  <nuxt-img loading="lazy" :src="bottomImage" class="pr-[75px]" alt="" />
                  <nuxt-img loading="lazy" :src="bottomImage" class="pr-[75px]" alt="" />
                  <nuxt-img loading="lazy" :src="bottomImage" class="" alt="" />
              </div>
          </div>

      </div>



  </div>
</template>

<script>
export default {
    props: {
        topImage: {
            type: String,
            required: true
        },
        bottomImage: {
            type: String,
        },
        ticketClass: {
            type: String
        },
    }
}
</script>

<style scoped>
img {
    @apply h-8 md:h-12 xl:h-28 w-auto max-w-full object-cover;
}
</style>