<script setup lang="ts">
// prop with amount of shown slides
const props = defineProps({
    slidesPerView: {
        type: Number,
        default: 2.5
    }
})

const {data} = await useAsyncData('blog' + process.env.CACHE_KEY, () => queryContent('/blog').find())
</script>

<template>
    <Swiper :slides-per-view="props.slidesPerView"
            :grab-cursor="true">

        <SwiperSlide v-for="(item, i) of data">
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
                                    <span class="text-white">{{ i + 1 }}</span>
                                    <span class="text-gray-500 text-xs"> /{{ data.length }}</span>
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
</template>

<style scoped>

</style>