<template>
  <div class="py-28 overflow-hidden">

      <div class="">

          <div class="relative bannerRow">
              <nuxt-img :src="topImage" class="invisible" alt="" />
              <div class="w-[300%] absolute top-0 left-0 flex overflow-y-visible mx-2">
                  <nuxt-img loading="lazy" :src="topImage" class="pr-[30px]" alt="" />
                  <nuxt-img loading="lazy" :src="topImage" class="pr-[30px]" alt="" />
                  <nuxt-img loading="lazy" :src="topImage" class="" alt="" />
              </div>
          </div>

          <div class="relative bannerRow" v-if="bottomImage" :class="ticketClass">
              <nuxt-img :src="bottomImage" class="invisible" alt="" />
              <div class="w-[300%] absolute top-0 flex bottomrowOffset overflow-y-visible mx-2">
                  <nuxt-img :src="bottomImage" class="pr-[30px]" alt="" />
                  <nuxt-img :src="bottomImage" class="pr-[30px]" alt="" />
                  <nuxt-img :src="bottomImage" class="" alt="" />
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
            required: true
        },
        ticketClass: {
            type: String
        },
        imageSpace: {
            type: Number,
            default: 75
        }
    }
}
</script>

<style scoped>
img {
    @apply h-12 md:h-28 w-auto max-w-full object-cover;
}

.bannerRow {
    @apply my-5;
}

.bottomrowOffset{
    @apply -left-12 md:-left-36;
}
</style>