<template>
    <div class="component">
        <navbar />

        <AngledBanner top-image="images/section-heading--faq.svg" />

        <div class="container">

            <div class="mb-36" v-for="item in data">
                <h2 class="text-3xl my-5">{{item.title}}</h2>

                <div class="" v-for="faqItem in item.faq">
                    <CollapseItem :title="faqItem.question">
                        <div v-html="faqItem.answer"></div>
                    </CollapseItem>
                </div>


            </div>
        </div>

        <footer_component />

    </div>
</template>

<style scoped>

:deep(a) {
    @apply underline;
}

.component {
    background: #252525;
    @apply pt-5;
}

</style>

<script setup>
import Navbar from "~/components/index_page/navbar.vue";
import Footer_component from "~/components/footer_component.vue";
import {Collapse} from "vue-collapsed";
import {FontAwesomeIcon} from "@fortawesome/vue-fontawesome";
import _groupBy from "lodash/groupBy";

let faqItemOpen = ref({})
const { data } = await useAsyncData('faq', () => queryContent('/faq').where({ language: 'en' }).only(['_path', 'title', 'faq']).find())

const toggleItem = function (item) {
    faqItemOpen[item] = !faqItemOpen[item]
}

</script>
