<script setup>
import Footer_component from "~/components/footer_component.vue";
import Navbar from "~/components/index_page/navbar.vue";
import Speakers from "~/components/index_page/speakers.vue";

const route = useRoute()
const { data } = await useAsyncData('speaker'+route.path+process.env.CACHE_KEY, () => queryContent(route.path).findOne())

// useHead({
//     title: data.title,
// })

</script>

<template>
    <div class="component bg-clouds">
        <navbar />
<div class="pt-12 md:pt-0">
    <StraightBanner top-image="images/section-heading--single-speaker.svg" class="pb-0 md:pb-12" />

    <div class="container md:pb-36">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

            <div class="">
                <div class="w-full md:w-3/4 mx-auto relative">
                    <nuxt-img :src="'/images/speakers/' + data.img" class="mx-auto w-full h-auto p-12" />
                </div>
            </div>

            <div class="md:pt-5">
                <h1 class="text-3xl">{{data.title}}</h1>
                <div class="md:ml-16 mt-2">
                    <ContentDoc />
                </div>
                <TicketPurchase />

            </div>

        </div>

    </div>

    <Speakers />

    <footer_component />
</div>


    </div>


</template>

<style scoped>
.component {
    @apply py-0;
}
</style>