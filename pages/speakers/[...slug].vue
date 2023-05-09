<script setup>
import Footer_component from "~/components/footer_component.vue";
import Navbar from "~/components/index_page/navbar.vue";
import Speakers from "~/components/index_page/speakers.vue";

const route = useRoute()
const { data } = await useAsyncData(() => queryContent(route.path).findOne())

</script>

<template>
    <div class="component bg-clouds">
        <navbar />

        <StraightBanner top-image="images/section-heading--single-speaker.svg" />

        <div class="container pb-36">

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

                <div class="">
                        <div class="w-3/4 mx-auto relative">
                            <nuxt-img :src="'/images/speakers/' + data.img" class="mx-auto w-full h-auto p-12" />
                            <TicketPurchase class="absolute left-0 bottom-0" />
                        </div>

                </div>

                <div class="pt-5">
                    <h1 class="text-3xl">{{data.title}}</h1>
                    <div class="ml-16">
                        <ContentDoc />
                    </div>

                </div>

            </div>

        </div>

        <Speakers />

        <footer_component />

    </div>


</template>

<style scoped>
.component {
    @apply py-0;
}
</style>