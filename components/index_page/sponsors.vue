<template>
    <div class="component" id="sponsors">


        <StraightBanner top-image="/images/section-heading--sponsors.svg"/>

        <div class="container pb-12">
            <div class="flex flex-1 justify-around items-center">
                <div class="sponsor px-5 " v-for="sponsor in data">
                    <a :href="sponsor.url" target="_blank" class="h-5">
                        <nuxt-img loading="lazy" :src="'/images/sponsors/' + sponsor.img" class="sponsor-img"
                                  :alt="sponsor.title"/>
                    </a>
                </div>
            </div>
        </div>

        <div class="container py-36" id="media-partners">
            <h3 class="uppercase text-sm mb-5">/media partners</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <div v-for="partner in mediaPartners" @mouseover="mouseover"
                     @mouseleave="mouseleave" :data-image="partner.img">
                    <nuxt-link :to="partner.url" target="_blank" :data-image="partner.img">
                        <div class="flex justify-between hover:text-adoptingYellow border-b" :data-image="partner.img">
                            {{ partner.title }}
                            <nuxt-img src="/images/arrow-top-right.svg" :data-image="partner.img"/>
                            <nuxt-img :src="'/images/media-partners/' + partner.img" :data-image="partner.img"
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
const data = await useAsyncData('sponsors' + process.env.CACHE_KEY, () => queryContent('/sponsors').find()).data
const mediaPartners = await useAsyncData('media-partners' + process.env.CACHE_KEY, () => queryContent('/media-partners').find()).data
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
            if (img && '/images/media-partners/' + img !== this.hoverImage) {
                this.hoverImage = '/images/media-partners/' + img
            }
        }
    }
}
</script>