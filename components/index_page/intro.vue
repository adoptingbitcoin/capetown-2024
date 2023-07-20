<template>
    <div class="component">

        <AngledBanner topImage="/images/section-heading--adb-is-back.svg"
                      bottomImage="/images/section-heading--adb-is-back.svg"/>

        <div class="container mx-auto px-4">
            <div class="grid md:grid-cols-2 mb-12">
                <div class=""></div>
                <div class="">
                    <client-only>
                        <p>
                            <FadeInText
                                    text="Unleashing the Power of Bitcoin:"/>
                            <FadeInText
                                    text="Adoption, Self-Sovereignty, and Lightning Revolution "/>
                        </p>
                        <br>
                        <p>
                            <FadeInText
                                    text="Join us for an extraordinary event in the breathtaking city of Cape Town, South Africa, where visionaries and trailblazers from around the globe will converge for the Adopting Bitcoin Cape Town Conference 2024!"/>
                        </p>
                    </client-only>
                </div>
            </div>


        </div>

        <Swiper :slides-per-view="2.5"
                :grab-cursor="true">

            <SwiperSlide v-for="item in data">
                <a :href="item.url" target="_blank">
                    <div class="rounded-lg shadow-lg overflow-hidden">
                        <div class="px-6 py-8 md:p-10">
                            <div class="flex justify-center">
                                <nuxt-img :src="'/images/blog/' + item.img"
                                          :data-image="'/images/blog/' + item.img"/>
                            </div>
                            <div class="mt-4">
                                <div class="grid grid-cols-4">

                                    <div class="col-span-1">
                                        <span class="text-white">{{ 1 }}</span>
                                        <span class="text-gray-500 text-xs"> /{{ 5 }}</span>
                                    </div>
                                    <div class="col-span-3">
                                        <span class="text-white">{{ item.description }}</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </a>
            </SwiperSlide>
        </Swiper>
    </div>
</template>
<script setup lang="ts">
import CarouselItem from "~/components/CarouselItem.vue";

const {data} = await useAsyncData('blog' + process.env.CACHE_KEY, () => queryContent('/blog').find())
</script>