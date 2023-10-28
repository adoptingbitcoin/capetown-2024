<script setup>
import Footer_component from "~/components/footer_component.vue";
import Navbar from "~/components/index_page/navbar.vue";
import Speakers from "~/components/index_page/speakers.vue";

const route = useRoute()
const {data} = await useAsyncData('sponsor' + route.path + process.env.CACHE_KEY, () => queryContent(route.path).findOne())

</script>

<template>
  <div class="component bg-clouds">
    <Head>
      <Title>{{ data.title }}</Title>
    </Head>
    <navbar/>
    <div class="pt-12 md:pt-0">
      <StraightBanner class="pb-0 md:pb-12" top-image="images/section-heading--single-sponsor.svg"/>

      <div class="container md:pb-36">

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">

          <div class="">
            <div class="w-full md:w-3/4 mx-auto relative">
              <nuxt-link :href="data.url" target="_blank">
                <nuxt-img :src="'/images/sponsors/' + data.img" class="mx-auto w-full h-auto p-12"/>
              </nuxt-link>
            </div>
          </div>

          <div class="md:pt-5">
            <h1 class="text-3xl">{{ data.title }}</h1>
            <div class="md:ml-16 mt-2 mb-12">
              <ContentDoc class="nuxt-content"/>
            </div>

          </div>

        </div>

      </div>

      <Speakers/>

      <footer_component/>
    </div>


  </div>


</template>

<style scoped>
.component {
  @apply py-0;
}

a {
  @apply underline;
}
</style>